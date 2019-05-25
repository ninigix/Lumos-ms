import React from "react";

import { FAILURE, REQUEST, DEFAULT } from "../../../actions/helpers";
import { MESSAGES, TITLES } from "./Indicators.constants";
import Indicator from "../Indicator/Indicator";

export const FailureIndicator = () => (
  <Indicator title={TITLES.FAILURE} message={MESSAGES.FAILURE} type={FAILURE} />
);

export const LoadingIndicator = () => (
  <Indicator title={TITLES.LOADING} message={MESSAGES.LOADING} type={REQUEST} />
);

export const DefaultIndicator = () => (
  <Indicator title={TITLES.DEFAULT} message={MESSAGES.DEFAULT} type={DEFAULT} />
);
