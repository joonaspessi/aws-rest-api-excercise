import React from "react";
import "./App.css";
import CreateEquipment from "./components/createEquipment";
import ListEquipment from "./components/listEquipment";
import ShowEquipment from "./components/showEquipment";
import PopulateEquipment from "./components/populateEquipment";

function App() {
  return (
    <div className="App">
      <header className="App-header">Equipment system</header>
      <div className="content">
        <div className="content-area">
          <CreateEquipment></CreateEquipment>
        </div>
        <div className="content-area">
          <PopulateEquipment></PopulateEquipment>
        </div>
        <div className="content-area">
          <ListEquipment></ListEquipment>
        </div>
        <div className="content-area">
          <ShowEquipment></ShowEquipment>
        </div>
      </div>
    </div>
  );
}

export default App;
