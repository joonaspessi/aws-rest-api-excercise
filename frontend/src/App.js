import React from "react";
import "./App.css";
import CreateEquipment from "./components/createEquipment";
import ListEquipment from "./components/listEquipment";
import ShowEquipment from "./components/showEquipment";
import PopulateEquipment from "./components/populateEquipment";
import * as API from "./util/api";

function App() {
  async function submitCreate(equipment) {
    await API.create(equipment);
  }

  async function submitPopulate() {
    return await API.populate();
  }

  async function submitList(limit) {
    return await API.list(limit);
  }

  async function submitGet(identifier) {
    return await API.get(identifier);
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
