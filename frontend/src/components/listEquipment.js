import React from "react";

class ListEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.inputUpdated = this.inputUpdated.bind(this);
  }

  submit(event) {
    this.props.submit();
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
        <h2>List equipment</h2>
        <input type="number" className="limit" placeholder="10" />
        <button className="list" onClick={this.submit}>
          Search
        </button>
      </div>
    );
  }
}

export default ListEquipment;
