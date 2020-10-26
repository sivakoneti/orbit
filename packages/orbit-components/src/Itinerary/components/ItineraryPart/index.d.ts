/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarypart
*/

import * as React from "react";
import * as Common from "../../../common/common";

export type Statuses = "warning" | "critical";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly status?: Statuses;
  readonly label?: React.ReactNode;
  readonly children: React.ReactNode;
}

export interface PartStatusProps {
  readonly interface: Statuses;
  readonly label?: React.ReactNode;
  readonly children: React.ReactNode;
}

export interface PartDetailsProps {
  readonly summary: React.ReactNode;
  readonly duration: string;
  readonly children: React.ReactNode;
}

export interface PartLinedContentProps {
  readonly children: React.ReactNode;
}

export interface PartPlaceProps {
  readonly date: string;
  readonly time: string;
  readonly hidden?: boolean;
  readonly name: string;
  readonly designation: string;
}

declare const ItineraryPart: React.FunctionComponent<Props>;

export { ItineraryPart, ItineraryPart as default };
export { ItineraryPartStatus } from "./ItineraryPartStatus.js";
export { ItineraryPartPlace } from "./ItineraryPartPlace.js";
export { ItineraryPartDetails } from "./ItineraryPartDetail.js";
