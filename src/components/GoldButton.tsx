
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  children: React.ReactNode;
  className?: string;
}

export default function GoldButton({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: GoldButtonProps) {
  return (
    <Button 
      {...props}
      className={cn(
        "transition-all duration-300",
        variant === "primary" && "bg-gold hover:bg-gold/90 text-white border-none shimmer overflow-hidden", 
        variant === "outline" && "bg-white hover:bg-gold/10 text-gold border-gold hover:border-gold/80",
        variant === "text" && "bg-transparent hover:bg-gold/10 text-gold",
        className
      )}
    >
      {children}
    </Button>
  );
}
