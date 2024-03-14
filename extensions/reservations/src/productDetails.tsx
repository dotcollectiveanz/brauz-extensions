import { useState, useCallback } from "react";
import {
  Screen,
  ScrollView,
  List,
  Stack,
  useExtensionApi,
  Section,
} from "@shopify/retail-ui-extensions-react";

export default function ProductDetailsScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();

  const [list, setList] = useState([
    {
      title: "",
      data: [
        {
          id: "1",
          leftSide: {
            label: "AS Logo Tee / S",
            subtitle: ["Available in 12 stores"],
            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            label: "$29.00",
          },
          onPress: () => api.navigation.navigate("AddStoreScreen"),
        },
        {
          id: "2",
          leftSide: {
            label: "AS Logo Tee / M",
            subtitle: ["Sold out in all stores"],
            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            label: "$29.00",
          },
          onPress: () => api.navigation.navigate("AddStoreScreen"),
        },
        {
          id: "3",
          leftSide: {
            label: "AS Logo Tee / L",
            subtitle: ["Available in 6 stores"],
            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            label: "$29.00",
          },
          onPress: () => api.navigation.navigate("AddStoreScreen"),
        },
        {
          id: "2",
          leftSide: {
            label: "AS Logo Tee / XL",
            subtitle: ["Available in 6 stores"],

            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            label: "$29.00",
          },
          onPress: () => api.navigation.navigate("AddStoreScreen"),
        },
      ],
    },
  ]);

  return (
    <Screen
      //   onReceiveParams={(params: string) => handleReceiveParams(params)}
      name="ProductDetailsScreen"
      title="AS Logo Tee"
    >
      <ScrollView>
        <Stack paddingVertical="Small" direction="vertical">
          <Section>
            <List title={list[0].title} data={list[0].data} />
          </Section>
        </Stack>
      </ScrollView>
    </Screen>
  );
}
