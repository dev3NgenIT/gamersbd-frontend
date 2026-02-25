// types/navigation.ts
export interface Category {
  _id: string;
  name: string;
  description: string;
  image: string | null;
  parent: {
    _id: string;
    name: string;
  } | null;
  level: number;
  createdAt: string;
}

export interface CategoryWithSubs extends Category {
  subcategories: CategoryWithSubs[];
  icon?: string; // We'll add emoji icons for display
}

export interface OfferItem {
  name: string;
  href: string;
  badge: string;
}

export interface NewsItem {
  name: string;
  href: string;
  date: string;
}