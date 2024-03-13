import { useEffect, useState } from "react";
import {
  Text,
  Screen,
  Stack,
  DatePicker,
  ScrollView,
  Button,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";

export default function AddDateScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [params, setParams] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [date, setDate] = useState<null | Date>(null);
  const handleDateSubmit = (date: Date) => {
    setDate(date);
    api.navigation.navigate("AddTimeSlotScreen");
    return;
  };
  useEffect(() => {
    return () => {
      setShowDatePicker(true);
    };
  }, []);

  return (
    <Screen
      name="AddDateScreen"
      title="Chadstone"
      onReceiveParams={(params: { id: string }) => setParams(params.id)}
    >
      <ScrollView>
        <Stack paddingVertical="Small" direction="vertical">
          <Text variant={"headingLarge"}>Select a date</Text>
          <Text variant={"headingLarge"}>{JSON.stringify(date)}</Text>
        </Stack>
        <DatePicker
          visibleState={[
            showDatePicker,
            () => setShowDatePicker(!showDatePicker),
          ]}
          onChange={(date: Date) => handleDateSubmit(date)}
        />
      </ScrollView>
    </Screen>
  );
}
