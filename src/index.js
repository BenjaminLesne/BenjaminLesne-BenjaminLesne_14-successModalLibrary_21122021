import React from "react";
import { render } from "react-dom";
import Standard from "./examples/Standard";

import "./index.scss";

const App = () => {
  return <Standard />;
};

render(<App />, document.getElementById("root"));
