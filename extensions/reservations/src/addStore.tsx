import { useState, useCallback } from "react";
import {
  Text,
  Screen,
  ScrollView,
  List,
  Stack,
  SearchBar,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";
import PageHeader from "./components/headers/PageHeader";
import TopPageLayout from "./components/layouts/TopPageLayout";

export default function AddStoreScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");

  const [list, setList] = useState([
    {
      title: "",
      data: [
        {
          id: "1",
          leftSide: {
            label: "Chadstone",
            subtitle: ["123 Example St, Malvern East VIC", "24 units on hand"],
          },

          onPress: () => api.navigation.navigate("AddDateScreen"),
        },
        {
          id: "2",
          leftSide: {
            label: "Chadstone Shopping Center",
            subtitle: [
              "Shop 51, Example St, Malvern East VIC",
              "4 units on hand",
            ],
          },

          onPress: () => api.navigation.navigate("AddDateScreen"),
        },
      ],
    },
  ]);

  return (
    <Screen name="AddStoreScreen" title="AS Logo Tee">
      <TopPageLayout>
        <PageHeader
          title="Add a store"
          description="Reservation request will be sent here"
        />

        <Stack
          flexChildren={true}
          direction="horizontal"
          paddingVertical="Large"
        >
          <SearchBar
            onTextChange={(value: string) => console.log(value)}
            onSearch={(value: string) => console.log(value)}
            placeholder="Search store"
          />
        </Stack>
      </TopPageLayout>
      <ScrollView>
        <Stack paddingVertical="Small" direction="vertical">
          <List title={list[0].title} data={list[0].data} />
        </Stack>
      </ScrollView>
    </Screen>
  );
}
