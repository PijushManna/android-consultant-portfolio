import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full",
        variant === "default" && "bg-surface-2 text-muted-foreground border border-border",
        variant === "primary" && "bg-primary/10 text-primary-light border border-primary/20",
        variant === "success" && "bg-green-500/10 text-green-400 border border-green-500/20",
        variant === "outline" && "border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
