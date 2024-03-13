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
  stylist: any;
  service: any;
  customerGroupInMapList: any[];
  order_by: any;
  sort_direction: any;
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
  customer_profile_image: any;
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
const currentDate = new Date();
const today = new Date().getTime();
let tomorrowDate = new Date(today);
tomorrowDate.setDate(currentDate.getDate() + 1);
let tomorrowTimestamp = tomorrowDate.getTime();

export const data = {
  success: true,
  message: "",
  data: {
    reservations: [
      {
        stylist: null,
        service: null,
        customerGroupInMapList: [],
        order_by: null,
        sort_direction: null,
        store_gid: "ZjkxZGUzM2YtOWFiMy00YmQxzddzLTkwMGItMDZhYzdjZWFjZWFl",
        reservation_gid:
          "NTRiNzUxffNTgtYTFlOSaddz00YzczLWE0MDUtNjkwZTcyNjE0OWQw",
        reservation_number:
          "NTcyM2E3ZTQtOWdzdE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
        reservation_status_gid:
          "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
        reservation_status: "New",
        reservation_status_description: "New (Requires action)",
        reservation_status_hex_color: "#00CFED",
        reservation_allowed_actions: [
          {
            positive: true,
            reservation_action_gid:
              "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
            reservation_action: "Confirm ready",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: true,
          },
          {
            positive: false,
            reservation_action_gid:
              "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
            reservation_action: "Item not available",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: false,
          },
        ],
        reservation_activities: [],
        reservation_epoch_time: 1710216534237,
        reservation_modified_at: 1705634936518,
        is_reservation_time_selected: true,
        reservation_created_epoch_time: 1705634936518,
        product_qty: 1,
        customer_gid: "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
        customer_name: "Danny Ayuam",
        customer_profile_image: null,
        customer_phone_number: "+61416024875",
        customer_email: "trungnus96@gmail.com",
        customer_selected_product_attributes: null,
        product_gid: "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
        product_thirdparty_id: "123456",
        product_description: "",
        product_name: "AS Logo Tee",
        product_brand: "Brauz Anywhere",
        product_rrp: 20,
        product_store_price: 20,
        product_total_price: 20,
        product_image:
          "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
        hold_time_from: today,
        hold_time_to: today + 1000,
        product_third_party_url:
          "https://brauz-anywhere.myshopify.com/products/case",
        style_preferences: null,
        order_id: "",
        new_version: false,
        customer_timezone: "",
        hold_time_from_str: "",
        hold_time_to_str: "",
        zoom_join_url: null,
        enable_comms: null,
        i18n_language_code: null,
        customer_group: [],
        queuing_flow: false,
        additional_needs: null,
      },
      {
        stylist: null,
        service: null,
        customerGroupInMapList: [],
        order_by: null,
        sort_direction: null,
        store_gid: "ZjkxZGUzM2YtOWFiMzddy00YmQxLTkwMGItMDZhYzdjZWFjZWFl",
        reservation_gid: "NTRiNzdzdUxNTgtYTFlOS00YzczLWE0MDUtNjkwZTcyNjE0OWQw",
        reservation_number: "NTcyM2E3ZTQtOWE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
        reservation_status_gid:
          "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
        reservation_status: "New",
        reservation_status_description: "New (Requires action)",
        reservation_status_hex_color: "#00CFED",
        reservation_allowed_actions: [
          {
            positive: true,
            reservation_action_gid:
              "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
            reservation_action: "Confirm ready",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: true,
          },
          {
            positive: false,
            reservation_action_gid:
              "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
            reservation_action: "Item not available",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: false,
          },
        ],
        reservation_activities: [],
        reservation_epoch_time: 1710216534237,
        reservation_modified_at: 1705634936518,
        is_reservation_time_selected: true,
        reservation_created_epoch_time: 1705634936518,
        product_qty: 1,
        customer_gid: "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
        customer_name: "Danny Byum",
        customer_profile_image: null,
        customer_phone_number: "+61416024875",
        customer_email: "trungnus96@gmail.com",
        customer_selected_product_attributes: null,
        product_gid: "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
        product_thirdparty_id: "123456",
        product_description: "",
        product_name: "AS Logo Tee",
        product_brand: "Brauz Anywhere",
        product_rrp: 20,
        product_store_price: 20,
        product_total_price: 20,
        product_image:
          "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
        hold_time_from: today,
        hold_time_to: today + 1000,
        product_third_party_url:
          "https://brauz-anywhere.myshopify.com/products/case",
        style_preferences: null,
        order_id: "",
        new_version: false,
        customer_timezone: "",
        hold_time_from_str: "",
        hold_time_to_str: "",
        zoom_join_url: null,
        enable_comms: null,
        i18n_language_code: null,
        customer_group: [],
        queuing_flow: false,
        additional_needs: null,
      },
      {
        stylist: null,
        service: null,
        customerGroupInMapList: [],
        order_by: null,
        sort_direction: null,
        store_gid: "ZjkxZGUzM2YtOWFiMy00YmQxLTkwMGItMDZhYzdjZWFjZWFddl",
        reservation_gid: "NTRiNzUxNTgtYTFlOS00YzczLWE0MDUtNjkwZddTcyNjE0OWQw",
        reservation_number: "NTcyM2E3ZTQtOWE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
        reservation_status_gid:
          "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
        reservation_status: "Pending",
        reservation_status_description: "New (Requires action)",
        reservation_status_hex_color: "#00CFED",
        reservation_allowed_actions: [
          {
            positive: true,
            reservation_action_gid:
              "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
            reservation_action: "Confirm ready",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: true,
          },
          {
            positive: false,
            reservation_action_gid:
              "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
            reservation_action: "Item not available",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: false,
          },
        ],
        reservation_activities: [],
        reservation_epoch_time: 1710216534237,
        reservation_modified_at: 1705634936518,
        is_reservation_time_selected: true,
        reservation_created_epoch_time: 1705634936518,
        product_qty: 1,
        customer_gid: "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
        customer_name: "Melissa Kennedy",
        customer_profile_image: null,
        customer_phone_number: "+61416024875",
        customer_email: "trungnus96@gmail.com",
        customer_selected_product_attributes: null,
        product_gid: "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
        product_thirdparty_id: "123456",
        product_description: "",
        product_name: "AS Logo Tee",
        product_brand: "Brauz Anywhere",
        product_rrp: 20,
        product_store_price: 20,
        product_total_price: 20,
        product_image:
          "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
        hold_time_from: tomorrowTimestamp,
        hold_time_to: tomorrowTimestamp + 1000,
        product_third_party_url:
          "https://brauz-anywhere.myshopify.com/products/case",
        style_preferences: null,
        order_id: "",
        new_version: false,
        customer_timezone: "",
        hold_time_from_str: "",
        hold_time_to_str: "",
        zoom_join_url: null,
        enable_comms: null,
        i18n_language_code: null,
        customer_group: [],
        queuing_flow: false,
        additional_needs: null,
      },
      {
        stylist: null,
        service: null,
        customerGroupInMapList: [],
        order_by: null,
        sort_direction: null,
        store_gid: "ZjkxZGUzM2YtOWFiMyYmQxLTkwMGItMDZhYzdjZWFjZWFl",
        reservation_gid: "NTRiNzUxNTgtYTFlOS0ddd0YzczLWE0MDUtNjkwZTcyNjE0OWQw",
        reservation_number: "NTcyM2E3ZTQtOWE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
        reservation_status_gid:
          "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
        reservation_status: "Pending",
        reservation_status_description: "New (Requires action)",
        reservation_status_hex_color: "#00CFED",
        reservation_allowed_actions: [
          {
            positive: true,
            reservation_action_gid:
              "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
            reservation_action: "Confirm ready",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: true,
          },
          {
            positive: false,
            reservation_action_gid:
              "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
            reservation_action: "Item not available",
            reservation_action_hex_color: "#000000",
            reservation_action_is_positive: false,
          },
        ],
        reservation_activities: [],
        reservation_epoch_time: 1710216534237,
        reservation_modified_at: 1705634936518,
        is_reservation_time_selected: true,
        reservation_created_epoch_time: 1705634936518,
        product_qty: 1,
        customer_gid: "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
        customer_name: "Melissa Kennedy",
        customer_profile_image: null,
        customer_phone_number: "+61416024875",
        customer_email: "trungnus96@gmail.com",
        customer_selected_product_attributes: null,
        product_gid: "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
        product_thirdparty_id: "123456",
        product_description: "",
        product_name: "AS Logo Tee",
        product_brand: "Brauz Anywhere",
        product_rrp: 20,
        product_store_price: 20,
        product_total_price: 20,
        product_image:
          "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
        hold_time_from: tomorrowTimestamp,
        hold_time_to: tomorrowTimestamp + 1000,
        product_third_party_url:
          "https://brauz-anywhere.myshopify.com/products/case",
        style_preferences: null,
        order_id: "",
        new_version: false,
        customer_timezone: "",
        hold_time_from_str: "",
        hold_time_to_str: "",
        zoom_join_url: null,
        enable_comms: null,
        i18n_language_code: null,
        customer_group: [],
        queuing_flow: false,
        additional_needs: null,
      },
    ],
    total_page: 1,
    total_element: 1,
  },
};

// {
//   "success": true,
//   "message": "",
//   "data": {
//     "reservations": [
//       {
//         "stylist": null,
//         "service": null,
//         "customerGroupInMapList": [],
//         "order_by": null,
//         "sort_direction": null,
//         "store_gid": "ZjkxZGUzM2YtOWFiMy00YmQxLTkwMGItMDZhYzdjZWFjZWFl",
//         "reservation_gid": "NTRiNzUxNTgtYTFlOS00YzczLWE0MDUtNjkwZTcyNjE0OWQw",
//         "reservation_number": "NTcyM2E3ZTQtOWE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
//         "reservation_status_gid": "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
//         "reservation_status": "New",
//         "reservation_status_description": "New (Requires action)",
//         "reservation_status_hex_color": "#00CFED",
//         "reservation_allowed_actions": [
//           {
//             "positive": true,
//             "reservation_action_gid": "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
//             "reservation_action": "Confirm ready",
//             "reservation_action_hex_color": "#000000",
//             "reservation_action_is_positive": true
//           },
//           {
//             "positive": false,
//             "reservation_action_gid": "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
//             "reservation_action": "Item not available",
//             "reservation_action_hex_color": "#000000",
//             "reservation_action_is_positive": false
//           }
//         ],
//         "reservation_activities": [],
//         "reservation_epoch_time": 1710216534237,
//         "reservation_modified_at": 1705634936518,
//         "is_reservation_time_selected": true,
//         "reservation_created_epoch_time": 1705634936518,
//         "product_qty": 1,
//         "customer_gid": "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
//         "customer_name": "Danny Nyuam",
//         "customer_profile_image": null,
//         "customer_phone_number": "+61416024875",
//         "customer_email": "trungnus96@gmail.com",
//         "customer_selected_product_attributes": null,
//         "product_gid": "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
//         "product_thirdparty_id": "123456",
//         "product_description": "",
//         "product_name": "Case",
//         "product_brand": "Brauz Anywhere",
//         "product_rrp": 20,
//         "product_store_price": 20,
//         "product_total_price": 20,
//         "product_image": "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
//         "hold_time_from": 1710216534237,
//         "hold_time_to": 1710216534900,
//         "product_third_party_url": "https://brauz-anywhere.myshopify.com/products/case",
//         "style_preferences": null,
//         "order_id": "",
//         "new_version": false,
//         "customer_timezone": "",
//         "hold_time_from_str": "",
//         "hold_time_to_str": "",
//         "zoom_join_url": null,
//         "enable_comms": null,
//         "i18n_language_code": null,
//         "customer_group": [],
//         "queuing_flow": false,
//         "additional_needs": null
//       },
//       {
//         "stylist": null,
//         "service": null,
//         "customerGroupInMapList": [],
//         "order_by": null,
//         "sort_direction": null,
//         "store_gid": "ZjkxZGUzM2YtOWFiMy00YmQxLTkwMGItMDZhYzdjZWFjZWFl",
//         "reservation_gid": "NTRiNzUxNTgtYTFlOS00YzczLWE0MDUtNjkwZTcyNjE0OWQw",
//         "reservation_number": "NTcyM2E3ZTQtOWE2NC00MzFmLTgzZWYtZTc0ZWEyNDRiYWQx",
//         "reservation_status_gid": "YzRhZTU5MjMtNGQyNC00ZjU3LWI3MDgtMGIwMzU4ODZmYTli",
//         "reservation_status": "Pending",
//         "reservation_status_description": "New (Requires action)",
//         "reservation_status_hex_color": "#00CFED",
//         "reservation_allowed_actions": [
//           {
//             "positive": true,
//             "reservation_action_gid": "YzQxYjA1NmUtN2RjYi00ZWI3LTg3Y2UtN2FkZWFmMDUwNDUw",
//             "reservation_action": "Confirm ready",
//             "reservation_action_hex_color": "#000000",
//             "reservation_action_is_positive": true
//           },
//           {
//             "positive": false,
//             "reservation_action_gid": "ZmFmZWYyZjItZDNmNS00MWVjLWFkYTgtMWM0YjZlMWNmMWI4",
//             "reservation_action": "Item not available",
//             "reservation_action_hex_color": "#000000",
//             "reservation_action_is_positive": false
//           }
//         ],
//         "reservation_activities": [],
//         "reservation_epoch_time": 1710216534237,
//         "reservation_modified_at": 1705634936518,
//         "is_reservation_time_selected": true,
//         "reservation_created_epoch_time": 1705634936518,
//         "product_qty": 1,
//         "customer_gid": "Y2JmZGRhNDUtODI4ZS00NmE0LWFjZmMtYzM0ZWEzODIyNjcz",
//         "customer_name": "Melissa Kennedy",
//         "customer_profile_image": null,
//         "customer_phone_number": "+61416024875",
//         "customer_email": "trungnus96@gmail.com",
//         "customer_selected_product_attributes": null,
//         "product_gid": "ZjQ1ZDU2N2ItM2U5ZS00ZmYxLThmZjktYTJjM2EwZGVkMTkw",
//         "product_thirdparty_id": "123456",
//         "product_description": "",
//         "product_name": "Case",
//         "product_brand": "Brauz Anywhere",
//         "product_rrp": 20,
//         "product_store_price": 20,
//         "product_total_price": 20,
//         "product_image": "https://images-cdn.brauz.ai/1c1729e3-7913-4b2e-b81f-517635ef57cd",
//         "hold_time_from": 1710216534237,
//         "hold_time_to": 1710216534900,
//         "product_third_party_url": "https://brauz-anywhere.myshopify.com/products/case",
//         "style_preferences": null,
//         "order_id": "",
//         "new_version": false,
//         "customer_timezone": "",
//         "hold_time_from_str": "",
//         "hold_time_to_str": "",
//         "zoom_join_url": null,
//         "enable_comms": null,
//         "i18n_language_code": null,
//         "customer_group": [],
//         "queuing_flow": false,
//         "additional_needs": null
//       }
//     ],
//     "total_page": 1,
//     "total_element": 1
//   }
// }
