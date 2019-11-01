import React from "react";

class ShowEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
    this.state = {
      identifier: ""
    };
  }
  submit(event) {
    console.log(event);
    this.props.submit(this.state.identifier);
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
        </div>
        <div className="details-table">
          <div className="details-row">
            <div className="details-label">
              Equipment Number (Unique Identifier)
            </div>
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
}

export default ShowEquipment;
