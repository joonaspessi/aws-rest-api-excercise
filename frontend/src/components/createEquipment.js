import React from "react";

function CreateEquipment() {
  return (
    <div className="create-equipment">
      <h2>Create new equipment</h2>
      <div className="create-equipment-container">
        <label for="id" className="create-label">
          Equipment Number (Unique Identifier)
        </label>
        <input id="id" type="text" className="create-input" />
        <label for="address" className="create-label">
          Address
        </label>
        <input id="address" type="text" className="create-input" />
        <label for="start" className="create-label">
          Contract Start Date
        </label>
        <input id="start" type="text" className="create-input" />
        <label for="end" className="create-label">
          Contract End Date
        </label>
        <input id="end" type="text" className="create-input" />
        <label for="status" className="create-label">
          Status (Running or Stopped)
        </label>
        <input id="status" type="text" className="create-input" />
      </div>
        <button className="create-button">Create</button>
    </div>
  );
}

export default CreateEquipment;
