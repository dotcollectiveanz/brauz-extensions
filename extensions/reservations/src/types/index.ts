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

export interface Root {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  reservations: Reservation[];
  total_page: number;
  total_element: number;
}

export interface Reservation {
  stylist: string;
  service: string;
  customerGroupInMapList: any[];
  order_by?: string;
  sort_direction?: string;
  store_gid: string;
  reservation_gid: string;
  reservation_number: string;
  reservation_status_gid: string;
  reservation_status: string;
  reservation_status_description: string;
  reservation_status_hex_color: string;
  reservation_allowed_actions: ReservationAllowedAction[];
  reservation_activities: any[];
  reservation_epoch_time: number;
  reservation_modified_at: number;
  is_reservation_time_selected: boolean;
  reservation_created_epoch_time: number;
  product_qty: number;
  customer_gid: string;
  customer_name: string;
  customer_profile_image: string;
  customer_phone_number: string;
  customer_email: string;
  customer_selected_product_attributes: any;
  product_gid: string;
  product_thirdparty_id: string;
  product_description: string;
  product_name: string;
  product_brand: string;
  product_rrp: number;
  product_store_price: number;
  product_total_price: number;
  product_image: string;
  hold_time_from: number;
  hold_time_to: number;
  product_third_party_url: string;
  style_preferences: any;
  order_id: string;
  new_version: boolean;
  customer_timezone: string;
  hold_time_from_str: string;
  hold_time_to_str: string;
  zoom_join_url: any;
  enable_comms: any;
  i18n_language_code: any;
  customer_group: any[];
  queuing_flow: boolean;
  additional_needs: any;
}

export interface ReservationAllowedAction {
  positive: boolean;
  reservation_action_gid: string;
  reservation_action: string;
  reservation_action_hex_color: string;
  reservation_action_is_positive: boolean;
}
