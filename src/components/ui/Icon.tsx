import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

const iconAliases: Record<string, keyof typeof LucideIcons> = {
  "Pharma Certified": "Pill",
  "High-Volume": "Shirt",
  "Service & Spa": "Scissors",
};

interface IconProps extends Partial<LucideProps> {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const resolvedName = (iconAliases[name] || name) as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[resolvedName] as React.ComponentType<LucideProps>;
  return LucideIcon ? <LucideIcon {...props} /> : null;
};