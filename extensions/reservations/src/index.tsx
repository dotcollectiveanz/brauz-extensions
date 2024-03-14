import React, { useEffect, useState } from "react";
import {
  Tile,
  Navigator,
  render,
  Text,
  Screen,
  useExtensionApi,
} from "@shopify/retail-ui-extensions-react";
import HomeScreen from "./screens/mainScreen";
import ReservationDetailsScreen from "./reservationDetails";
import NewReservationScreen from "./screens/customerSearchAndAddScreen";
import AddProductScreen from "./screens/addProductScreen";
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

  return (
    <Navigator>
      {/* <SessionScreen /> */}
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

const SessionScreen = () => {
  const { currentSession, getSessionToken } = useExtensionApi().session;
  const { shopId, userId, locationId, staffMemberId } = currentSession;
  const [sessionToken, setSessionToken] = useState<string>();

  getSessionToken().then((newToken) => {
    setSessionToken(newToken);
  });
  return (
    <Screen name="Screen One" title="Screen One Title">
      <Text>
        shopId: {shopId}, userId: {userId}, locationId: {locationId}, staffId:{" "}
        {staffMemberId}
      </Text>
      <Text>sessionToken: {sessionToken}</Text>
    </Screen>
  );
};

render("pos.home.tile.render", () => <SmartGridTile />);
render("pos.home.modal.render", () => <SmartGridModal />);
