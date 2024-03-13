import { useState, useCallback } from "react";
import {
  Text,
  Screen,
  ScrollView,
  List,
  Stack,
  SearchBar,
  useExtensionApi,
  Section,
  TextField,
} from "@shopify/retail-ui-extensions-react";

export default function AddProductScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [list, setList] = useState([
    {
      title: "",
      data: [
        {
          id: "1",
          leftSide: {
            label: "AS Logo Tee",
            subtitle: ["Available in 2 colours", "XYZ-0923"],
            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            showChevron: true,
          },
          onPress: () => api.navigation.navigate("ProductDetailsScreen"),
        },
        {
          id: "2",
          leftSide: {
            label: "AS Logo Tee",
            subtitle: ["Available in 2 colours", "XYZ-0924"],
            image: {
              source: "https://source.unsplash.com/random/?product,ecommerce",
            },
          },
          rightSide: {
            showChevron: true,
          },
          onPress: () => api.navigation.navigate("ProductDetailsScreen"),
        },
      ],
    },
  ]);

  const handleInput = useCallback(() => {
    // Check if all required fields are populated
    const allFieldsPopulated = Object.values(newCustomer).every(
      (field) => field.trim() !== "",
    );

    // Enable/disable the submit button based on the condition
    setBtnDisabled(!allFieldsPopulated);
  }, [newCustomer, btnDisabled, setBtnDisabled]);

  return (
    <Screen
      //   onReceiveParams={(params: string) => handleReceiveParams(params)}
      name="AddProductScreen"
      title="Add product"
    >
      <ScrollView>
        <Stack direction="vertical">
          <Stack direction="vertical">
            <Text variant={"headingLarge"}>Add a product</Text>
            <Text color="TextSubdued" variant={"body"}>
              Only one product can be reserved per reservation
            </Text>
          </Stack>
          <Stack
            flexChildren={true}
            direction="horizontal"
            paddingVertical="Large"
          >
            <SearchBar
              onTextChange={(value: string) => console.log(value)}
              onSearch={(value: string) => console.log(value)}
              placeholder="Search product"
            />
          </Stack>
        </Stack>

        {list[0].data.length < 1 ? (
          <Stack title="Reserved">
            <Text color="TextSubdued" variant={"body"}>
              New customer
            </Text>
            <TextField
              placeholder="First name"
              label="First name"
              required={true}
              value={newCustomer.firstname}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, firstname: value })
              }
              onInput={() => handleInput()}
            />
            <TextField
              placeholder="Last name"
              label="Last name"
              required={true}
              value={newCustomer.lastname}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, lastname: value })
              }
              onInput={() => handleInput()}
            />
            <TextField
              placeholder="Email"
              label="Email"
              required={true}
              value={newCustomer.email}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, email: value })
              }
              onInput={() => handleInput()}
            />
            <TextField
              placeholder="Phone"
              label="Phone"
              required={true}
              value={newCustomer.phone}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, phone: value })
              }
              onInput={() => handleInput()}
            />
          </Stack>
        ) : (
          <Section title="" paddingVertical="Small" direction="vertical">
            <List title={list[0].title} data={list[0].data} />
          </Section>
        )}
      </ScrollView>
    </Screen>
  );
}
