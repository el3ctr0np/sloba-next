interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray";
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "white",
  id
}: SectionProps) {
  const bgColor = background === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section id={id} className={`section-padding ${bgColor} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
