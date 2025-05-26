export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  features?: ServiceFeature[];
}

export interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}
