export interface listingProp {
  name: string;
  address: string;
  price: string;
  id: string | number;
  photos: string[];
}

export interface propertyProp {
  name: string;
  address: string;
  price: string;
  id: string | number;
  photos: string[];
  bedrooms: string;
  bathrooms: string;
  guests: string;
  description: string;
}
