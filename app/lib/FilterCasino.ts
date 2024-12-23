export interface CasinosWithLocation {
  casino?: string;
  bonuses?: {
    deposit?: number;
    nodeposit?: number;
    multi_currency?: string;
    freespins?: number;
    code?: string;
    playthrough?: number;
    deposit_amount?: number;
    percent?: number;
  }[];
  // Add other required properties here
} 