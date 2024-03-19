import { useState } from "react";
import "./App.css";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

function PassWordShowHide() {
  const [visiblity, setVisiblity] = useState(false);
  return (
    <div>
      <p>{visiblity ? "Password: 123456" : "Password: ******"}</p>
      <button onClick={() => setVisiblity(!visiblity)}>
        Show/Hide password
      </button>
    </div>
  );
}

function ExpandText() {
  const [expanded, setExpanded] = useState(false);
  const text =
    "This is a longer text that is typically hidden unless expanded.";
  return (
    <div>
      <p>{expanded ? text : text.substring(0, 20)}...</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "collapse" : "expand"}
      </button>
    </div>
  );
}

function TabActive(){
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div>
      <button onClick={() => setActiveTab("Home")}>Home</button>
      <button onClick={() => setActiveTab("Profile")}>Profile</button>
      <button onClick={() => setActiveTab("Message")}>Messages</button>
      <p>Content of {activeTab} tab.</p>
    </div>
  )
}

function TextSize(){
  const [fontSize, setFontSize] = useState(14);
  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust your font size</p>
      <button onClick={() => setFontSize(fontSize + 1)}>Increase size</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Decrease size</button>
    </div>
  )
}

export default function App() {

  return (
    <main>
      <ToggleTheme />
      <hr />
      <PassWordShowHide />
      <hr />
      <ExpandText />
      <hr />
      <TabActive/>
      <hr />
      <TextSize/>
      
    </main>
  );
}
