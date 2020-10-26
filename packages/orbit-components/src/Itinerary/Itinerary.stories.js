// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import Airplane from "../icons/AirplaneUp";
import Stack from "../Stack";
import CarrierLogo from "../CarrierLogo";
import Badge from "../Badge";
import ItineraryPart, { ItineraryPartDetail, ItineraryPartPlace } from "./components/ItineraryPart";
import ItineraryLinedContent from "./components/ItineraryLinedContent";
import Text from "../Text";

import Itinerary from ".";

const BadgeGroup = () => {
  const carrier = [{ code: "FR", name: "Ryanair" }];

  return (
    <Stack inline align="center" spacing="tight">
      <CarrierLogo size="medium" carriers={carrier} />
      <Badge icon={<Airplane />} />
      <Badge>1 stop</Badge>
    </Stack>
  );
};

const CollapsedContent = () => {
  return (
    <Stack direction="column">
      <Text weight="bold">Connection info</Text>
      <Text>Connection number</Text>
      <Text weight="bold">Seating info</Text>
      <Text>Seat pitch</Text>
      <Text>Seat width</Text>
    </Stack>
  );
};

export const Default = () => {
  return (
    <Itinerary>
      <ItineraryPart>
        <ItineraryPartPlace
          name="Prague"
          designation="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItineraryPartDetail>
        <ItineraryPartPlace
          name="Milan"
          designation="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItineraryPart>
    </Itinerary>
  );
};

export const HiddenFlight = () => {
  return (
    <Itinerary>
      <ItineraryPart>
        <ItineraryPartPlace
          name="Prague"
          designation="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItineraryPartDetail>
        <ItineraryPartPlace
          name="Milan"
          designation="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
        <ItineraryPartPlace
          name="Moscow"
          designation="Moscow Sheremetyevo International Airport (SVO)"
          date="Mon, 22.10"
          time="10:15"
          hidden
        />
      </ItineraryPart>
    </Itinerary>
  );
};

export const Status = () => {
  const label = text("label", "Canceled");
  const type = select("type", ["critical", "warning"], "critical");

  return (
    <ItineraryPart status={type} label={label}>
      <ItineraryPartPlace
        name="Prague"
        designation="Václav Havel Airport Prague (PRG)"
        date="Fri, 19.10"
        time="14:05"
      />
      <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItineraryPartDetail>
      <ItineraryPartPlace
        name="Milan"
        designation="Milan Bergamo International Airport (BGY)"
        date="Fri, 19.10"
        time="16:35"
      />
      <ItineraryPartPlace
        name="Moscow"
        designation="Moscow Sheremetyevo International Airport (SVO)"
        date="Mon, 22.10"
        time="10:15"
        hidden
      />
    </ItineraryPart>
  );
};

export const LinedContent = () => {
  const type = select("type", ["critical", "warning"], "critical");
  const label = text("label", "Canceled");

  return (
    <ItineraryPart status={type} label={label}>
      <ItineraryPartPlace
        name="Prague"
        designation="Václav Havel Airport Prague (PRG)"
        date="Fri, 19.10"
        time="14:05"
      />
      <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItineraryPartDetail>
      <ItineraryPartPlace
        name="Milan"
        designation="Milan Bergamo International Airport (BGY)"
        date="Fri, 19.10"
        time="16:35"
      />
      <ItineraryLinedContent>
        <Badge type="warning">Your flight is ending here</Badge>
      </ItineraryLinedContent>
      <ItineraryPartPlace
        name="Moscow"
        designation="Moscow Sheremetyevo International Airport (SVO)"
        date="Mon, 22.10"
        time="10:15"
        hidden
      />
    </ItineraryPart>
  );
};

export const Place = () => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const designation = text("designation", "Václav Havel Airport Prague (PRG)");
  const name = text("name", "Prague");

  return <ItineraryPartPlace name={name} designation={designation} date={date} time={time} />;
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: ["Default", "HiddenFlight", "Status", "LinedContent", "Place"],
};
