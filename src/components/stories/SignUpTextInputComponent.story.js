import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpTextInputComponent from "../SignUpTextInputComponent";

storiesOf("SignUpTextInputComponent", module).add("Happy Path", () => (
  <SignUpTextInputComponent />
));
