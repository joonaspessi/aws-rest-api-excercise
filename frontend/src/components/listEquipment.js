import React from 'react';

class ListEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
    this.renderEquipmentList = this.renderEquipmentList.bind(this);
    this.getDateString = this.getDateString.bind(this);
    this.state = {
      equipment: [],
      loading: ''
    };
  }

  async submit(event) {
    this.setState({ loading: 'Loading equipment list', equipment: [] });
    const equipment = await this.props.submit(this.state.limit);
    if (equipment === null) {
      this.setState({ loading: 'Equipment list loading failed' });
    }
    this.setState({
      equipment,
      loading: ''
    });
  }

  inputUpdated(e) {
    const value = e.target.value;
    this.setState({
      limit: value
    });
  }

  async componentDidMount() {
    const equipment = await this.props.submit(this.state.limit);
    this.setState({
      equipment
    });
  }

  getDateString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  renderEquipmentList(equipment) {
    return equipment.map(e => {
      return (
        <div className="equipment-row" key={e.id}>
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
        <div>
          <input
            type="number"
            className="limit"
            placeholder="50"
            onChange={this.inputUpdated}
          />
          <label className="list list--label-limit">limit</label>
        </div>
        <button className="list list--refresh" onClick={this.submit}>
          Refresh
        </button>
        <div>{this.state.loading}</div>
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
