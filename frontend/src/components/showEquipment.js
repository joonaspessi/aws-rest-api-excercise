import React from 'react';

function ShowEquipment() {
    return (
        <div className="create-equipment">
            <h2>Show equipment details</h2>
            <div className="details-table">
                <div className="details-row">
                    <div className="details-label">Equipment Number (Unique Identifier)</div>
                    <div className="details-value">123</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Address</div>
                    <div className="details-value">123</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Contract Start Date</div>
                    <div className="details-value">123</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Contract End Date</div>
                    <div className="details-value">123</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Status (Running or Stopped)</div>
                    <div className="details-value">123</div>
                </div>
            </div>

        </div>
    );
}

export default ShowEquipment;
