import { useState } from "react";
import {
  Text,
  Screen,
  Stack,
  List,
  Button,
  ScrollView,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";

export default function ConfirmationScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");

  const [list, setList] = useState([
    {
      title: "",
      data: [
        {
          id: "1",
          leftSide: {
            label: "Customer",
          },

          rightSide: {
            label: "Amy Abbott",
          },
        },
        {
          id: "2",
          leftSide: {
            label: "Email",
          },

          rightSide: {
            label: "amy@abbott.com",
          },
        },
        {
          id: "3",
          leftSide: {
            label: "Phone",
          },

          rightSide: {
            label: "+61 123 456 789",
          },
        },
        {
          id: "4",
          leftSide: {
            label: "Product",
          },

          rightSide: {
            label: "AS Logo Tee / Black / S",
          },
        },
        {
          id: "5",
          leftSide: {
            label: "Reservation Date",
          },

          rightSide: {
            label: "8 May 2023",
          },
        },
        {
          id: "6",
          leftSide: {
            label: "Reservation Time",
          },
          rightSide: {
            label: "9:00 AM - 9:30 AM",
          },
        },
      ],
    },
  ]);

  return (
    <Screen
      name="ConfirmationScreen"
      title="Chadstone"
      // onReceiveParams={(params: { id: string }) => setParams(params.id)}
    >
      <ScrollView>
        <Stack paddingVertical="Small" direction="vertical">
          <Text variant={"headingLarge"}>Confirmation reservation details</Text>
          <Text color="TextSubdued" variant={"body"}>
            Please confirm the reservations details with the customer
          </Text>
        </Stack>
        <Stack paddingVertical="Small" direction="vertical">
          <List title={list[0].title} data={list[0].data} />
        </Stack>
      </ScrollView>
      <Stack
        paddingVertical="ExtraLarge"
        paddingHorizontal="ExtraExtraLarge"
        direction="vertical"
      >
        <Button
          title="Submit reservation"
          type="basic"
          onPress={() => api.navigation.navigate("NewReservationScreen")}
        />
      </Stack>
    </Screen>
  );
}
