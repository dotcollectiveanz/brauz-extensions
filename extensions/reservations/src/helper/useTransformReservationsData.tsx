import createBadges from "./createBadges";
import dateFormatter from "./dateFormatter";
import { useState, useEffect } from "react";
import {
  ListProps,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";

// Transform reservations data into ListProps data structure
export default function useTransformReservationsData() {
  const api = useExtensionApi<"pos.home.modal.render">();

  const [todayReservationList, setTodayReservationList] = useState<ListProps[]>(
    [],
  );
  const [tomorrowsReservationList, setTomorrowsReservationList] = useState<
    ListProps[]
  >([]);

  const transformData = (rawData: any) => {
    const { reservations } = rawData.data;
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayReservations = reservations.filter((reservation: any) => {
      const holdTimeFrom = new Date(reservation.hold_time_from);
      return holdTimeFrom.toDateString() === today.toDateString();
    });

    const tomorrowReservations = reservations.filter((reservation: any) => {
      const holdTimeFrom = new Date(reservation.hold_time_from);
      return holdTimeFrom.toDateString() === tomorrow.toDateString();
    });

    setTodayReservationList(
      todayReservations.map((reservation: any) =>
        transformReservationToListProps(reservation),
      ),
    );
    setTomorrowsReservationList(
      tomorrowReservations.map((reservation: any) =>
        transformReservationToListProps(reservation),
      ),
    );
  };

  const transformReservationToListProps = (reservation: any) => {
    let formatted_product_price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AUD",
    });
    let collection_date = new Date(reservation.hold_time_from).toDateString();

    return {
      id: reservation.reservation_gid,
      leftSide: {
        label: reservation.customer_name,
        badges: createBadges(reservation),
        subtitle: [
          dateFormatter({
            hold_time_from: reservation.hold_time_from,
            hold_time_to: reservation.hold_time_to,
          }).formattedString,
        ],
      },
      rightSide: {
        showChevron: true,
      },
      onPress: () =>
        api.navigation.navigate("ReservationDetailsScreen", {
          id: reservation.reservation_gid,
          name: reservation.customer_name,
          email: reservation.customer_email,
          product_image: reservation.product_image,
          product_price: formatted_product_price.format(
            reservation.product_total_price,
          ),
          product_variant: "Black / S", //need to find out where variant is stored
          product_sku: "XYZ1234", //need to find out where sku is stored
          product_name: reservation.product_name,
          location: "Chadstone", //need to find out where location is stored
          collection_date: collection_date,
          collection_time: dateFormatter({
            hold_time_from: reservation.hold_time_from,
            hold_time_to: reservation.hold_time_to,
          }).formattedReservation,
          badges: createBadges(reservation),
        }),
    };
  };

  return {
    todayReservationList,
    tomorrowsReservationList,
    transformData,
  };
}
