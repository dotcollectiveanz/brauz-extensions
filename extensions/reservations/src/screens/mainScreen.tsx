import {
  Text,
  Screen,
  ScrollView,
  List,
  Button,
  Stack,
  Section,
  SearchBar,
  useExtensionApi,
  Badge,
  Selectable,
} from "@shopify/retail-ui-extensions-react";
import { useState, useEffect } from "react";
import { data } from "../mock_data/data";
import useTransformReservationsData from "../helper/useTransformReservationsData";
import PageHeader from "../components/headers/PageHeader";
import TopPageLayout from "../components/layouts/TopPageLayout";
import BottomPageLayout from "../components/layouts/BottomPageLayout";
export default function MainScreen() {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [searchText, setSearchText] = useState("");
  const [test, setTest] = useState({});
  const { transformData, todayReservationList, tomorrowsReservationList } =
    useTransformReservationsData();

  const onTextChangeSearchBar = (value: string) => {
    console.log(value);
    setSearchText(value);
  };

  useEffect(() => {
    transformData(data);
  }, []);

  return (
    <Screen name="home" title="Reservations" label={true}>
      <TopPageLayout>
        <PageHeader title="Reservations" />
        <Stack flexChildren={true} direction="horizontal">
          <SearchBar
            onTextChange={(value: string) => console.log(value)}
            onSearch={(value: string) => console.log(value)}
            placeholder="Search customer"
          />
        </Stack>
        <Stack direction="horizontal" paddingVertical="Small">
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
      </TopPageLayout>
      <ScrollView>
        <Section title="Today">
          <Stack paddingVertical="Small" direction="vertical">
            {todayReservationList.length > 0 && (
              <List
                title={todayReservationList[0].title}
                data={todayReservationList}
              />
            )}
          </Stack>
        </Section>
        <Section title="Tomorrow">
          <Stack paddingVertical="Small" direction="vertical">
            {tomorrowsReservationList.length > 0 && (
              <List
                title={tomorrowsReservationList[0].title}
                data={tomorrowsReservationList}
              />
            )}
          </Stack>
        </Section>
      </ScrollView>

      <BottomPageLayout>
        <Button
          title="Create new reservation"
          type="basic"
          onPress={() => api.navigation.navigate("NewReservationScreen")}
        />
      </BottomPageLayout>
    </Screen>
  );
}
