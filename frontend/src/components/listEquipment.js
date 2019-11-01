import React from "react";

class ListEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
    this.renderEquipmentList = this.renderEquipmentList.bind(this);
    this.getDateString = this.getDateString.bind(this);
    this.state = {
      equipment: []
    };
  }

  async submit(event) {
    const equipment = await this.props.submit(this.state.limit);
    this.setState({
      equipment
    });
  }

  inputUpdated(e) {
    const value = e.target.value;
    this.setState({
      limit: value
    });
  }

  getDateString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  renderEquipmentList(equipment) {
    return equipment.map(e => {
      return (
        <div className="equipment-row">
          <div className="id">{e.id}</div>
          <div className="address">{e.address}</div>
          <div className="start">
            {this.getDateString(new Date(e.contractStartDate))}
          </div>
          <div className="end">
            {this.getDateString(new Date(e.contractEndDate))}
          </div>
          <div className="status">{e.status}</div>
        </div>
      );
    });
  }

  render(props) {
    return (
      <div className="create-equipment">
        <h2>List equipment</h2>
        <input
          type="number"
          className="limit"
          placeholder="10"
          onChange={this.inputUpdated}
        />
        <button className="list" onClick={this.submit}>
          Search
        </button>
        <div className="equipment-list">
          <div className="header-row">
            <div className="header-item">ID</div>
            <div className="header-item">Address</div>
            <div className="header-item">Contract start</div>
            <div className="header-item">Contract end</div>
            <div className="header-item">Status</div>
          </div>
          {this.renderEquipmentList(this.state.equipment)}
        </div>
      </div>
    );
  }
}

export default ListEquipment;
