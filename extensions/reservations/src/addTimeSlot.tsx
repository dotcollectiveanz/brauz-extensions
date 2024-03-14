import { useState } from "react";
import {
  Text,
  Screen,
  Stack,
  List,
  ScrollView,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";
import PageHeader from "./components/headers/PageHeader";

export default function AddTimeSlotScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");

  const [list, setList] = useState([
    {
      title: "",
      data: [
        {
          id: "1",
          leftSide: {
            label: "9:00 AM - 9:30 AM",
          },

          onPress: () => api.navigation.navigate("ConfirmationScreen"),
        },
        {
          id: "2",
          leftSide: {
            label: "9:30 AM - 10:00 AM",
          },

          onPress: () => api.navigation.navigate("ConfirmationScreen"),
        },
        {
          id: "3",
          leftSide: {
            label: "10:00 AM - 10:30 AM",
          },

          onPress: () => api.navigation.navigate("ConfirmationScreen"),
        },
      ],
    },
  ]);

  return (
    <Screen
      name="AddTimeSlotScreen"
      title="Chadstone"
      // onReceiveParams={(params: { id: string }) => setParams(params.id)}
    >
      <ScrollView>
        <PageHeader title="Select a time slot" />

        <Stack paddingVertical="Small" direction="vertical">
          <List title={list[0].title} data={list[0].data} />
        </Stack>
      </ScrollView>
    </Screen>
  );
}
