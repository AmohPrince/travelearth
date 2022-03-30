import "./App.css";
import React, { useState } from "react";
import Topbar from "./Components/Topbar/Topbar";
import Promotionaltour from "./Sections/Promotionaltour/Promotionaltour";
import Globallyaccepted from "./Sections/Globallyaccepted/Globallyaccepted";
import Watchtour from "./Sections/Watchtour/Watchtour";
import Ourteam from "./Sections/Ourteam/Ourteam";
import Whychooseus from "./Sections/Whychooseus/Whychooseus";
import Customersay from "./Sections/Customerssay/Customersay";

const yellow = {
  background: "#f0c53e",
  primarytextcolour: "#000",
  secondarytextcolour: "7f2736",
  logoTextColour: "#ffffff",
  logoBackground: "#000000",
  linksColor: "#252641",
  tabBackground: "#B25A59",
  lifeJourney: "#7F2736",
  phoneNumber: "+1 (000) 000 000",
  notPhoneNumber: "Explore Destinations",
  phoneIcon: false,
  text: "Join Now",
  tripsColor: " #7F2736",
};

const dark = {
  background: "#2c2d32",
  primarytextcolour: "#ffffff",
  secondarytextcolour: "#f0c53e",
  logoTextColour: "#000000",
  logoBackground: "#F0C53E",
  linksColor: "#ffffff",
  tabBackground: "#B25A59",
  lifeJourney: "#F0C53E",
  phoneNumber: "+1 (000) 000 000",
  notPhoneNumber: "Explore Destinations",
  phoneIcon: false,
  text: "Join Now",
  tripsColor: " #7F2736",
};
const brown = {
  background: "#b25a59",
  primarytextcolour: "#ffffff",
  secondarytextcolour: "#f0c53e",
  logoTextColour: "#000000",
  logoBackground: "#F0C53E",
  linksColor: "#ffffff",
  tabBackground: "#000",
  lifeJourney: "#F0C53E",
  phoneNumber: "+1 (000) 000 000",
  notPhoneNumber: "Explore Destinations",
  phoneIcon: false,
  text: "Join Now",
  tripsColor: "#F0C53E",
};

export const themeContext = React.createContext();
function App() {
  const [theme, setTheme] = useState(yellow);

  return (
    <div className="App">
      <themeContext.Provider value={theme}>
        <Topbar theme={theme} />
        <Promotionaltour theme={theme} />
        <Globallyaccepted theme={theme} />
        <Watchtour theme={theme} />
        <Ourteam theme={theme} />
        <Whychooseus />
        <Customersay />
      </themeContext.Provider>
    </div>
  );
}

export default App;
