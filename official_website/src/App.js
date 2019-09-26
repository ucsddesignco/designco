import React from "react";
import { setConfiguration } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";
import Footer from "./components/Footer";

import "./css/App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

setConfiguration({
  gutterWidth: spacer2,
  containerWidths: [2000, 2000, 2000, 2000]
});

function App() {
  return (
    <div>
      <div id="content">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
