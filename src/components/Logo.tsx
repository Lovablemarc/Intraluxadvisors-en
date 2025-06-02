import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/intralux_logo.svg" 
        alt="IntraLux Advisors" 
        className="h-12 w-auto"
      />
    </div>
  );
}