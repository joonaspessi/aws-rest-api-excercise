import React from 'react';

function PopulateEquipment(props) {
  return (
    <div className="create-equipment">
      <h2>Populate 10 more equipment</h2>
      <button className="populate" onClick={props.submit}>
        Populate
      </button>
    </div>
  );
}

export default PopulateEquipment;
