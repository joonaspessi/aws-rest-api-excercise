import React from 'react';

class CreateEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
    this.checkboxUpdated = this.checkboxUpdated.bind(this);
    this.state = {
      loading: ''
    };
  }
  async submit() {
    const id = this.state.id;
    const address = this.state.address;
    const start = this.state.start;
    const end = this.state.end;
    const status = this.state.status === true; // Take undefined as false

    if (
      id === undefined ||
      address === undefined ||
      start === undefined ||
      end === undefined ||
      status === undefined
    ) {
      alert('Invalid equipment');
      return false;
    }
    this.setState({ loading: 'Submitting' });
    const retVal = await this.props.submit({
      id,
      address,
      contractStartDate: new Date(start).getTime(),
      contractEndDate: new Date(end).getTime(),
      status: status ? 'Running' : 'Stopped'
    });
    if (retVal === null) {
      this.setState({ loading: 'Failed to add equipment' });
    } else {
      this.setState({ loading: 'Equipment added' });
    }
  }

  checkboxUpdated(e) {
    const key = e.target.id;
    const value = e.target.checked;

    this.setState({
      [key]: value
    });
  }

  inputUpdated(e) {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  render(props) {
    return (
      <div className="create-equipment">
        <h2>Create new equipment</h2>
        <div className="create-equipment-container">
          <label htmlFor="id" className="create-label">
            Equipment Number (Unique Identifier)
          </label>
          <input
            id="id"
            onChange={this.inputUpdated}
            required
            type="text"
            className="create-input"
          />
          <label htmlFor="address" className="create-label">
            Address
          </label>
          <input
            id="address"
            onChange={this.inputUpdated}
            required
            type="text"
            className="create-input"
          />
          <label htmlFor="start" className="create-label">
            Contract Start Date
          </label>
          <input
            type="date"
            id="start"
            onChange={this.inputUpdated}
            required
            className="create-input"
          />
          <label htmlFor="end" className="create-label">
            Contract End Date
          </label>
          <input
            type="date"
            id="end"
            onChange={this.inputUpdated}
            required
            className="create-input"
          />
          <label htmlFor="status" className="create-label">
            Running
          </label>
          <input
            id="status"
            onChange={this.checkboxUpdated}
            required
            type="checkbox"
            className="create-input"
          />
        </div>
        <button className="create-button" onClick={this.submit}>
          Create
        </button>
        <div>{this.state.loading}</div>
      </div>
    );
  }
}

export default CreateEquipment;
