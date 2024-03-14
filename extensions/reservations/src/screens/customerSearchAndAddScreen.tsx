import { useState, useEffect, useCallback } from "react";
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
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newCustomer, setNewCustomer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [list, setList] = useState([
    {
      title: "",
      data: [],
    },
  ]);

  useEffect(() => {
    const allFieldsPopulated = Object.values(newCustomer).every(
      (field) => field.trim() !== "",
    );
    setBtnDisabled(!allFieldsPopulated);
  }, [newCustomer]);

  const handleInput = useCallback(
    (fieldName, value) => {
      setNewCustomer((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    },
    [setNewCustomer],
  );

  const handleTextChange = useCallback((value) => {
    setSearchText(value); // Set inputActive based on whether the search bar has any text
  }, []);
  return (
    <Screen name="NewReservationScreen" title="Add customer">
      <ScrollView>
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
            onTextChange={(value: string) => handleTextChange(value)}
            onSearch={(value: string) => console.log(value)}
            placeholder="Search existing customer"
          />
        </Stack>

        {searchText === "" && (
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
              onInput={(value: string) => handleInput("firstname", value)}
            />
            <TextField
              placeholder="Last name"
              label="Last name"
              required={true}
              value={newCustomer.lastname}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, lastname: value })
              }
              onInput={(value: string) => handleInput("lastname", value)}
            />
            <TextField
              placeholder="Email"
              label="Email"
              required={true}
              value={newCustomer.email}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, email: value })
              }
              onInput={(value: string) => handleInput("email", value)}
            />
            <TextField
              placeholder="Phone"
              label="Phone"
              required={true}
              value={newCustomer.phone}
              onChange={(value: string) =>
                setNewCustomer({ ...newCustomer, phone: value })
              }
              onInput={(value: string) => handleInput("phone", value)}
            />
          </Stack>
        )}

        {/* <Stack paddingVertical="Small" direction="vertical">
          <List title={list[0].title} data={list[0].data} />
        </Stack> */}
      </ScrollView>
      {searchText === "" && (
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
