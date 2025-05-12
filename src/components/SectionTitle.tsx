
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  className = "",
  subtitleClassName = ""
}: SectionTitleProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", "mb-12")}>
      <h2 className={cn("text-3xl md:text-4xl font-bold font-playfair relative inline-block", className)}>
        {title}
        <span className="block h-1 w-full bg-gold mt-2"></span>
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-gray-600", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
