interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white border-2 border-gray-900 rounded-lg p-6
        ${hover ? "shadow-card transition-all duration-300 hover:shadow-card-hover hover:translate-x-[5px] hover:translate-y-[5px]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
