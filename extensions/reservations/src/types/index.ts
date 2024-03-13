import { BadgeProps } from "@shopify/retail-ui-extensions-react";

export interface ParamsState {
  id: string;
  name: string;
  product_image: string;
  product_price: string;
  product_variant: string;
  product_sku: string;
  product_name: string;
  location: string;
  collection_date: string;
  collection_time: string;
  badges: BadgeProps[];
}
