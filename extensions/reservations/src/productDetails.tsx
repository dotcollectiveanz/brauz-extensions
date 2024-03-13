import { useState, useCallback } from "react";
import {
  Screen,
  ScrollView,
  List,
  Stack,
  useExtensionApi,
  Badge,
  Selectable,
} from "@shopify/retail-ui-extensions-react";

export default function ProductDetailsScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

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
        <Stack direction="vertical">
          <Stack direction="horizontal">
            <Selectable onPress={(iten: string) => console.log(iten)}>
              <Badge variant={"neutral"} text={"Date (newest first)"} />
            </Selectable>
            <Selectable onPress={(iten: string) => console.log(iten)}>
              <Badge variant={"neutral"} text={"Needs action"} />
            </Selectable>
            <Selectable onPress={(iten: string) => console.log(iten)}>
              <Badge variant={"neutral"} text={"Reserved"} />
            </Selectable>
            <Selectable onPress={(iten: string) => console.log(iten)}>
              <Badge variant={"neutral"} text={"Completed"} />
            </Selectable>
          </Stack>
        </Stack>

        <Stack paddingVertical="Small" direction="vertical">
          <List title={list[0].title} data={list[0].data} />
        </Stack>
      </ScrollView>
    </Screen>
  );
}
