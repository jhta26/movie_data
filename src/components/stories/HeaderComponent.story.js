import React from "react";
import { storiesOf } from "@storybook/react";

import HeaderComponent from "../HeaderComponent";

storiesOf("HeaderComponent", module).add("Happy Path", () => (
  <HeaderComponent />
));
