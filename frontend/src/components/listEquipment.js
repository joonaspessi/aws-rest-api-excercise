import React from 'react';

function ListEquipment() {
    return (
        <div className="create-equipment">
            <h2>List equipment</h2>
            <input type="number" className="limit" placeholder="10"/>
            <button className="list">Search</button>
        </div>
    );
}

export default ListEquipment;
