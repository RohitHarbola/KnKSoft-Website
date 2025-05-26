export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  features: Feature[];
  imageSrc: string;
}
