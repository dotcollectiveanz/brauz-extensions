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
import PageHeader from "../components/headers/PageHeader";
import TopPageLayout from "../components/layouts/TopPageLayout";
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
  useEffect(() => {}, []);

  return (
    <Screen
      name="AddDateScreen"
      title="Chadstone"
      onReceiveParams={(params: { id: string }) => setParams(params.id)}
    >
      <TopPageLayout>
        <PageHeader title="Select a date" />
      </TopPageLayout>

      <DatePicker
        visibleState={[
          showDatePicker,
          () => setShowDatePicker(!showDatePicker),
        ]}
        onChange={(date: Date) => handleDateSubmit(date)}
      />
    </Screen>
  );
}
