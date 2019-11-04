import React from 'react';

class ShowEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
    this.state = {
      identifier: '',
      equipment: null,
      loading: ''
    };
  }
  async submit(event) {
    console.log(event);
    this.setState({ loading: 'Loading equipment details.', equipment: {} });
    const equipment = await this.props.submit(this.state.identifier);
    if (equipment === null) {
      this.setState({
        loading: 'Loading equipment details failed. Check your id'
      });
    } else {
      this.setState({
        equipment,
        loading: ''
      });
    }
  }

  inputUpdated(e) {
    const key = e.target.id;
    const value = e.target.value;
    console.log(key, value);
    this.setState({
      identifier: value
    });
  }

  render(props) {
    return (
      <div className="create-equipment">
        <h2>Show equipment details</h2>
        <div className="search-form">
          <label htmlFor="identifier" className="id">
            Equipment number
          </label>
          <input
            id="identifier"
            type="text"
            className="id"
            onChange={this.inputUpdated}
          />
          <button className="identifier" onClick={this.submit}>
            Show
          </button>
          <div>{this.state.loading}</div>
        </div>
        {this.state.equipment !== null && (
          <div className="details-table">
            <div className="details-row">
              <div className="details-label">Equipment Number</div>
              <div className="details-value">{this.state.equipment.id}</div>
            </div>
            <div className="details-row">
              <div className="details-label">Address</div>
              <div className="details-value">
                {this.state.equipment.address}
              </div>
            </div>
            <div className="details-row">
              <div className="details-label">Contract Start Date</div>
              <div className="details-value">
                {this.state.equipment.contractStartDate}
              </div>
            </div>
            <div className="details-row">
              <div className="details-label">Contract End Date</div>
              <div className="details-value">
                {this.state.equipment.contractEndDate}
              </div>
            </div>
            <div className="details-row">
              <div className="details-label">Status (Running or Stopped)</div>
              <div className="details-value">{this.state.equipment.status}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShowEquipment;
