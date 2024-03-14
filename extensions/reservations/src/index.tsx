import React, { useEffect } from "react";
import {
  Tile,
  Navigator,
  render,
  Text,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";
import HomeScreen from "./screens/mainScreen";
import ReservationDetailsScreen from "./reservationDetails";
import NewReservationScreen from "./screens/customerSearchAndAddScreen";
import AddProductScreen from "./addProduct";
import ProductDetailsScreen from "./productDetails";
import AddStoreScreen from "./addStore";
import AddDateScreen from "./screens/dateEntryScreen";
import AddTimeSlotScreen from "./addTimeSlot";
import ConfirmationScreen from "./confirmationScreen";
import ReservationReadyScreen from "./reservationReady";
import ReservationPaidAndCompleteScreen from "./reservationPaidAndComplete";
const SmartGridTile = () => {
  const api = useExtensionApi();
  const [resNum, setResNum] = React.useState(5);
  return (
    <Tile
      title=""
      subtitle={`${resNum} reservations to prepare`}
      onPress={() => {
        api.smartGrid.presentModal();
      }}
      enabled
    />
  );
};

const SmartGridModal = () => {
  const api = useExtensionApi<"pos.home.modal.render">();
  const [customers, setCustomers] = React.useState([]);

  return (
    <Navigator>
      <HomeScreen />
      <ReservationDetailsScreen />
      <NewReservationScreen />
      <AddProductScreen />
      <ProductDetailsScreen />
      <AddStoreScreen />
      <AddDateScreen />
      <AddTimeSlotScreen />
      <ConfirmationScreen />
      <ReservationReadyScreen />
      <ReservationPaidAndCompleteScreen />
    </Navigator>
  );
};

render("pos.home.tile.render", () => <SmartGridTile />);
render("pos.home.modal.render", () => <SmartGridModal />);
