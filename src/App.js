import React from "react";
import { setConfiguration } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import "./css/App.scss";

setConfiguration({
  gutterWidth: 40,
  containerWidths: [2000, 2000, 2000, 2000]
});

function App() {
  return (
    <div>
      <div id="content">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
