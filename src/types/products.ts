export interface Product {
    id: string;
    name: string;
    statement: string; // توضیحات اختصاصی استخراج شده از داکیومنت
    positioning: string;
    problem?: string;
    solution?: string;
    capabilities: string[];
    useCases: string[];
    differentiation?: string;
    ctaLink: string;
  }