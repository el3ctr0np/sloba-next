<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - Slobodan Jelisavac</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #0a1c2e 100%);
            min-height: 100vh;
            color: #e2e8f0;
            padding: 40px 20px;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 32px;
          }
          .logo {
            font-size: 2rem;
            font-weight: 700;
            color: #168ad6;
            margin-bottom: 8px;
          }
          .logo span {
            color: #ffffff;
          }
          h1 {
            font-size: 1.4rem;
            color: #94a3b8;
            font-weight: 500;
          }
          .count {
            text-align: center;
            margin-bottom: 24px;
            color: #cbd5f5;
          }
          .sitemap-table {
            width: 100%;
            background: rgba(15, 23, 42, 0.6);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background: rgba(22, 138, 214, 0.18);
            padding: 14px 18px;
            text-align: left;
            font-weight: 600;
            color: #9bd1ff;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          td {
            padding: 12px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: #e2e8f0;
            font-size: 0.95rem;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background: rgba(22, 138, 214, 0.12);
          }
          a {
            color: #e2e8f0;
            text-decoration: none;
          }
          a:hover {
            color: #9bd1ff;
          }
          .priority {
            display: inline-flex;
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(22, 138, 214, 0.2);
            color: #9bd1ff;
            font-weight: 600;
            font-size: 0.85rem;
          }
          .footer {
            text-align: center;
            margin-top: 28px;
            color: #94a3b8;
            font-size: 0.95rem;
          }
          .footer a {
            color: #e2e8f0;
            font-weight: 600;
          }
          .footer img {
            height: 1em;
            vertical-align: middle;
            margin-left: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Slobodan<span>Jelisavac</span></div>
            <h1>XML Sitemap</h1>
          </div>
          <p class="count">
            Ukupno <strong>
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)" />
            </strong> stranica
          </p>
          <div class="sitemap-table">
            <table>
              <tr>
                <th>URL</th>
                <th>Prioritet</th>
                <th>Izmenjeno</th>
              </tr>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc" />
                    </a>
                  </td>
                  <td>
                    <span class="priority">
                      <xsl:value-of select="sitemap:priority" />
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="substring(sitemap:lastmod, 1, 10)" />
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
          <div class="footer">
            Dizajn &amp; razvoj:
            <a href="https://www.asarum-tech.com/" target="_blank" rel="noopener noreferrer">
              Asarum Tech <img src="/asarum-logo.png" alt="Asarum Tech" />
            </a>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
