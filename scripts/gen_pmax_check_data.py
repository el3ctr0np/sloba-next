# Generates src/lib/audit-engine/data/pmax-check.ts from the blog post (single source of truth).
# Re-run after editing posts/pmax-audit-checklist/{sr,en}.tsx to keep the tool in sync.
import re, json, html, sys

SP = "/private/tmp/claude-501/-Users-slobodanjelisavac-Documents-DigitalJelisavac/2424e321-a8de-477c-a8e9-1796c5f6d695/scratchpad"
BASE = "src/app/[locale]/blog/[slug]/posts/pmax-audit-checklist/"
OUT = "src/lib/audit-engine/data/pmax-check.ts"

# Priority (P1=3 / P2=2 / P3=1) and effort assigned per checkpoint. Not in the post -
# these are the agency's own weighting, mirroring the P1/P2/P3 vocabulary of the
# 105-point audit checklist XLSX.
PRIORITY = {
 1:"P1",2:"P2",3:"P1",4:"P2",5:"P1",
 6:"P1",7:"P1",8:"P1",9:"P2",10:"P2",
 11:"P2",12:"P2",13:"P3",14:"P3",15:"P2",
 16:"P2",17:"P2",18:"P2",19:"P2",20:"P1",
 21:"P1",22:"P1",23:"P1",24:"P2",25:"P2",
 26:"P1",27:"P2",28:"P3",29:"P3",
 30:"P1",31:"P1",32:"P2",33:"P1",34:"P1",
 35:"P2",36:"P2",37:"P2",38:"P3",
}
EFFORT = {
 1:"medium",2:"medium",3:"low",4:"low",5:"low",
 6:"low",7:"medium",8:"low",9:"high",10:"low",
 11:"low",12:"medium",13:"high",14:"medium",15:"medium",
 16:"medium",17:"medium",18:"medium",19:"medium",20:"low",
 21:"low",22:"low",23:"low",24:"low",25:"medium",
 26:"low",27:"low",28:"medium",29:"low",
 30:"low",31:"low",32:"low",33:"medium",34:"low",
 35:"low",36:"medium",37:"medium",38:"low",
}

def clean(s):
    s = s.replace('{" "}', ' ')
    s = re.sub(r'\{`(.*?)`\}', r'\1', s, flags=re.S)   # {`"Limited by budget"`}
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('&rarr;', '→').replace('&larr;', '←')
    s = re.sub(r'&[a-zA-Z]+;|&#\d+;', lambda m: html.unescape(m.group(0)), s)
    s = re.sub(r'\s+([,.;:])', r'\1', s)               # " ," left by stripped links
    return re.sub(r'\s+', ' ', s).strip()

def parse(path, where_label, red_label):
    lines = open(path, encoding='utf-8').read().split('\n')
    groups = []
    for i, ln in enumerate(lines):
        m = re.search(r'<h2 id="(gr(?:oup|upa)-\d[^"]*)">(.*?)</h2>', ln)
        if m: groups.append({"line": i, "id": m.group(1), "title": clean(m.group(2))})
    span_re = re.compile(r'<span className="flex-shrink-0 w-7 h-7 mt-0\.5 bg-gray-900 text-white rounded-full[^"]*">(\d+)</span>')
    marks = [(i, int(m.group(1))) for i, ln in enumerate(lines) if (m := span_re.search(ln))]
    items = []
    for idx, (li, num) in enumerate(marks):
        end = marks[idx+1][0] if idx+1 < len(marks) else len(lines)
        block = '\n'.join(lines[li+1:end])
        ps = re.findall(r'<p className="([^"]*)"[^>]*>(.*?)</p>', block, re.S)
        title = wt = red = None
        for cls, body in ps:
            t = clean(body)
            if 'font-semibold text-gray-900' in cls and title is None: title = t
            elif 'text-gray-500' in cls and wt is None: wt = t
            elif 'text-red-600' in cls and red is None: red = t
        gi = max(k for k, gr in enumerate(groups) if gr["line"] < li)
        items.append({"n": num, "gi": gi,
                      "title": title,
                      "where": (wt or "").removeprefix(where_label).strip(),
                      "red": (red or "").removeprefix(red_label).strip()})
    return groups, items

srg, sri = parse(BASE+"sr.tsx", "Gde:", "Crveni signal:")
eng, eni = parse(BASE+"en.tsx", "Where:", "Red flag:")

assert [x["n"] for x in sri] == list(range(1,39)) == [x["n"] for x in eni]
assert len(srg) == len(eng) == 8

# Split the long "where" strings into where + note. EN marks the explanatory tail
# with " — ", SR with the first comma. Text stays verbatim, only split.
for a, b in zip(sri, eni):
    assert a["gi"] == b["gi"]
    if " — " in b["where"]:
        b["where"], b["note"] = b["where"].split(" — ", 1)
        assert "," in a["where"], (a["n"], a["where"])
        a["where"], a["note"] = [p.strip() for p in a["where"].split(",", 1)]
    else:
        assert "," not in b["where"] or b["n"] in (), b["n"]
        a["note"] = b["note"] = ""
    for k in ("title","where","red"):
        assert a[k] and b[k], (a["n"], k)

def ts(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

lines = []
w = lines.append
w("// AUTO-GENERATED. Do not edit by hand.")
w("// Source of truth: src/app/[locale]/blog/[slug]/posts/pmax-audit-checklist/{sr,en}.tsx")
w("// Regenerate with: python3 scripts/gen_pmax_check_data.py")
w("//")
w("// The 38 checkpoints, their group split, the \"where to look\" line and the red flag")
w("// are lifted verbatim from the post. priority (P1/P2/P3) and effort are the agency's")
w("// own weighting and live only here.")
w("")
w('import type { AuditDefinition } from "../types";')
w("")
w("export const pmaxCheckSR: AuditDefinition = {")
w('  id: "pmax-check",')
w("  version: 1,")
w("  groups: [")
for gi, g in enumerate(srg):
    w("    {")
    w(f'      id: {ts(g["id"])},')
    w(f'      title: {ts(g["title"])},')
    w("      items: [")
    for it in [x for x in sri if x["gi"] == gi]:
        w("        {")
        w(f'          id: "pmax-{it["n"]}",')
        w(f'          n: {it["n"]},')
        w(f'          priority: {ts(PRIORITY[it["n"]])},')
        w(f'          effort: {ts(EFFORT[it["n"]])},')
        w(f'          title: {ts(it["title"])},')
        w(f'          where: {ts(it["where"])},')
        if it["note"]: w(f'          note: {ts(it["note"])},')
        w(f'          redFlag: {ts(it["red"])},')
        w("        },")
    w("      ],")
    w("    },")
w("  ],")
w("};")
w("")
w("export const pmaxCheckEN: AuditDefinition = {")
w('  id: "pmax-check",')
w("  version: 1,")
w("  groups: [")
for gi, g in enumerate(eng):
    w("    {")
    w(f'      id: {ts(g["id"])},')
    w(f'      title: {ts(g["title"])},')
    w("      items: [")
    for it in [x for x in eni if x["gi"] == gi]:
        w("        {")
        w(f'          id: "pmax-{it["n"]}",')
        w(f'          n: {it["n"]},')
        w(f'          priority: {ts(PRIORITY[it["n"]])},')
        w(f'          effort: {ts(EFFORT[it["n"]])},')
        w(f'          title: {ts(it["title"])},')
        w(f'          where: {ts(it["where"])},')
        if it["note"]: w(f'          note: {ts(it["note"])},')
        w(f'          redFlag: {ts(it["red"])},')
        w("        },")
    w("      ],")
    w("    },")
w("  ],")
w("};")
w("")

open(OUT, "w", encoding="utf-8").write("\n".join(lines))
print("wrote", OUT, len(lines), "lines")
