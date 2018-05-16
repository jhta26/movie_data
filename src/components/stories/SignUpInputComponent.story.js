import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInputComponent from "../SignUpInputComponent";

storiesOf("SignUpInputComponent", module).add("Happy Path", () => (
  <SignUpInputComponent />
));
