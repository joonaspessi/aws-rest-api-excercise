import React from "react";
import "./App.css";
import CreateEquipment from "./components/createEquipment";
import ListEquipment from "./components/listEquipment";
import ShowEquipment from "./components/showEquipment";
import PopulateEquipment from "./components/populateEquipment";
import * as API from "./util/api";

function App() {
  async function submitCreate() {
    API.create();
  }

  async function submitPopulate() {
    API.populate();
  }

  async function submitList() {
    API.list();
  }

  async function submitGet(identifier) {
    API.get(identifier);
  }

  return (
    <div className="App">
      <header className="App-header">Equipment system</header>
      <div className="content">
        <div className="content-area">
          <CreateEquipment submit={submitCreate}></CreateEquipment>
        </div>
        <div className="content-area">
          <PopulateEquipment submit={submitPopulate}></PopulateEquipment>
        </div>
        <div className="content-area">
          <ListEquipment submit={submitList}></ListEquipment>
        </div>
        <div className="content-area">
          <ShowEquipment submit={submitGet}></ShowEquipment>
        </div>
      </div>
    </div>
  );
}

export default App;
