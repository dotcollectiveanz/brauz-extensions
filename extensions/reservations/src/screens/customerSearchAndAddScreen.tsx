import { useState, useCallback } from "react";
import {
  Text,
  Screen,
  ScrollView,
  List,
  Stack,
  SearchBar,
  useExtensionApi,
  TextField,
  Button,
} from "@shopify/retail-ui-extensions-react";
import PageHeader from "../components/headers/PageHeader";
import TopPageLayout from "../components/layouts/TopPageLayout";
import BottomPageLayout from "../components/layouts/BottomPageLayout";

export default function CustomerSearchAndAddScreen() {
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
            label: "Amy Abbott",
            subtitle: ["amy@brauz.com"],
          },
          onPress: () =>
            api.navigation.navigate("AddProductScreen", { id: "1" }),
        },
        {
          id: "2",
          leftSide: {
            label: "Amy Bryant",
            subtitle: ["a.bryant@brauz.com"],
          },

          onPress: () =>
            api.navigation.navigate("AddProductScreen", { id: "2" }),
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
    <Screen name="NewReservationScreen" title="Add customer">
      <TopPageLayout>
        <PageHeader
          title="Add customer information"
          description=" Reservation updates will be sent here"
        />

        <Stack
          flexChildren={true}
          direction="horizontal"
          paddingVertical="Large"
        >
          <SearchBar
            onTextChange={(value: string) => console.log(value)}
            onSearch={(value: string) => console.log(value)}
            placeholder="Search existing customer"
          />
        </Stack>
      </TopPageLayout>
      <ScrollView>
        {list[0].data.length < 1 ? (
          <Stack direction="vertical">
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
          <Stack paddingVertical="Small" direction="vertical">
            <List title={list[0].title} data={list[0].data} />
          </Stack>
        )}
      </ScrollView>
      {list[0].data.length < 1 && (
        <BottomPageLayout>
          <Button
            title="Create new customer"
            type="basic"
            isDisabled={btnDisabled}
            onPress={() => api.navigation.navigate("NewReservationScreen")}
          />
        </BottomPageLayout>
      )}
    </Screen>
  );
}
