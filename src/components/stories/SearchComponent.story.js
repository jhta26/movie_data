import React from "react";
import { storiesOf } from "@storybook/react";

import SearchComponent from "../SearchComponent";

storiesOf("SearchComponent", module).add("Happy Path", () => (
  <SearchComponent />
));
