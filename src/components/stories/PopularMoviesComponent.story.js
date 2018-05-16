import React from "react";
import { storiesOf } from "@storybook/react";

import PopularMoviesComponent from "../PopularMoviesComponent";

storiesOf("PopularMoviesComponent", module).add("Happy Path", () => (
  <PopularMoviesComponent />
));
