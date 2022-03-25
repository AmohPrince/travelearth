import "./App.css";
import { useState } from "react";
import Topbar from "./Components/Topbar/Topbar";
import Promotionaltour from "./Sections/Promotionaltour/Promotionaltour";

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
};

function App() {
  const [theme, setTheme] = useState(yellow);
  return (
    <div className="App">
      <Topbar theme={theme} />
      <Promotionaltour theme={theme} />
    </div>
  );
}

export default App;
