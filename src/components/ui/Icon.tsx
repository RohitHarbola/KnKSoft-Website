import * as LucideIcons from "lucide-react";
import { LucideProps } from 'lucide-react';

interface IconProps extends Partial<LucideProps> {
  name: keyof typeof LucideIcons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideProps>;
  return LucideIcon ? <LucideIcon {...props} /> : null;
}; 