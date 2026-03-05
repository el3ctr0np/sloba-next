interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-2xl p-6
        ${hover ? "shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5" : "shadow-card"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
