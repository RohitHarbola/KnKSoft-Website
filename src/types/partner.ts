export interface PartnerReason {
    id: string;
    number: string;
    title: string;
    description: string;
  }
  
  export interface PartnerSectionProps {
    title: string;
    subtitle: string;
    reasons: PartnerReason[];
  }
  
  