import { useState } from "react";
import {
  Text,
  Screen,
  ScrollView,
  Stack,
  useExtensionApi,
  Badge,
  Section,
  Button,
  BadgeProps,
  List,
} from "@shopify/retail-ui-extensions-react";

export default function ReservationsDetailsScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState({
    id: "",
    name: "",
    email: "",
    product_image: "",
    product_price: "",
    product_variant: "",

    product_sku: "",
    product_name: "",
    location: ",",
    collection_date: "",
    collection_time: "",
    badges: [] as BadgeProps[],
  });

  const handleConfirmReservation = () => {
    console.log("confirm reservation");
  };
  const handleCancelReservation = () => {
    console.log("cancel reservation");
  };

  return (
    <Screen
      name="ReservationDetailsScreen"
      title="Reservations"
      onReceiveParams={(params: {
        id: string;
        name: string;
        email: string;
        product_image: string;
        product_price: string;
        product_variant: string;
        product_sku: string;
        product_name: string;
        location: string;
        collection_date: string;
        collection_time: string;
        badges: BadgeProps[];
      }) => setParams(params)}
    >
      <Stack
        direction="vertical"
        paddingHorizontal="ExtraExtraLarge"
        paddingVertical="Small"
      >
        <Stack direction="vertical">
          <Text variant={"headingLarge"}>{params.name}</Text>
        </Stack>
        <Stack direction="horizontal">
          {params.badges.length > 0 &&
            params.badges.map((badge) => (
              <Badge
                variant={badge.variant}
                text={badge.text}
                status={badge.status ? badge.status : undefined}
              />
            ))}
        </Stack>
        <Stack direction="vertical">
          <Text variant={"body"} color="TextSubdued">
            Reservation &middot; {params.location}
          </Text>
        </Stack>
      </Stack>

      <ScrollView>
        <Section title="Reserved">
          <List
            title={""}
            data={[
              {
                id: params.id,
                onPress: () =>
                  api.navigation.navigate("ReservationReady", {
                    id: params.id,
                    name: params.name,
                    email: params.email,
                    product_image: params.product_image,
                    product_price: params.product_price,
                    product_variant: "Black / S",
                    product_sku: "XYZ1234",
                    product_name: params.product_name,
                    location: "Chadstone",
                    collection_date: params.collection_date,
                    collection_time: params.collection_time,
                    badges: params.badges,
                  }),
                leftSide: {
                  label: params.product_name,
                  subtitle: [params.product_variant, params.product_sku],
                  image: {
                    source: params.product_image,
                    badge: 1,
                  },
                },
                rightSide: { label: params.product_price },
              },
            ]}
          />
        </Section>
        <Section title="Reservation summary">
          <List
            title={""}
            data={[
              {
                id: params.id,
                leftSide: {
                  label: "Store",
                },
                rightSide: { label: params.location },
              },
              {
                id: params.id,
                leftSide: {
                  label: "Collection Date",
                },
                rightSide: { label: params.collection_date },
              },
              {
                id: params.id,
                leftSide: {
                  label: "Collection Time",
                },
                rightSide: { label: params.collection_time },
              },
              {
                id: params.id,
                leftSide: {
                  label: "Email",
                },
                rightSide: { label: params.email },
              },
            ]}
          />
        </Section>
      </ScrollView>
      <Stack
        paddingVertical="ExtraLarge"
        paddingHorizontal="ExtraExtraLarge"
        direction="horizontal"
        flexChildren={true}
      >
        <Button
          title="Confirm reservation"
          type="primary"
          onPress={() => handleConfirmReservation()}
        />
        <Button
          title="Cancel reservation"
          type="destructive"
          onPress={() => handleCancelReservation()}
        />
      </Stack>
    </Screen>
  );
}
