import React, { Component } from 'react';
import { Card, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';

const options = [
  { label: "Select State", value: "0", info: "abcd" },
  { label: "Alabama", value: "AL", info: "abcd" },
  { label: "Alaska", value: "AK", info: "abcd" },
  { label: "Arizona", value: "AZ", info: "abcd" },
  { label: "Arkansas", value: "AR", info: "abcd" },
  { label: "California", value: "CA", info: "abcd" },
  { label: "Colorado", value: "CO", info: "abcd" },
  { label: "Connecticut", value: "CT", info: "abcd" },
  { label: "Delaware", value: "DE", info: "abcd" },
  { label: "District of Columbia", value: "DC", info: "abcd" },
  { label: "Florida", value: "FL", info: "abcd" },
  { label: "Georgia", value: "GA", info: "abcd" },
  { label: "Hawaii", value: "HI", info: "abcd" },
  { label: "Idaho", value: "ID", info: "abcd" },
  { label: "Illinois", value: "IL", info: "abcd" },
  { label: "Indiana", value: "IN", info: "abcd" },
  { label: "Iowa", value: "IA", info: "abcd" },
  { label: "Kansas", value: "KS", info: "abcd" },
  { label: "Kentucky", value: "KY", info: "abcd" },
  { label: "Louisiana", value: "LA", info: "abcd" },
  { label: "Maine", value: "ME", info: "abcd" },
  { label: "Maryland", value: "MD", info: "abcd" },
  { label: "Massachusetts", value: "MA", info: "abcd" },
  { label: "Michigan", value: "MI", info: "abcd" },
  { label: "Minnesota", value: "MN", info: "abcd" },
  { label: "Mississippi", value: "MS", info: "abcd" },
  { label: "Missouri", value: "MO", info: "abcd" },
  { label: "Montana", value: "MT", info: "abcd" },
  { label: "Nebraska", value: "NE", info: "abcd" },
  { label: "Nevada", value: "NV", info: "abcd" },
  { label: "New Hampshire", value: "NH", info: "abcd" },
  { label: "New Jersey", value: "NJ", info: "abcd" },
  { label: "New Mexico", value: "NM", info: "abcd" },
  { label: "New York", value: "NY", info: "abcd" },
  { label: "North Carolina", value: "NC", info: "abcd" },
  { label: "North Dakota", value: "ND", info: "abcd" },
  { label: "Ohio", value: "OH", info: "abcd" },
  { label: "Oklahoma", value: "OK", info: "abcd" },
  { label: "Oregon", value: "OR", info: "abcd" },
  { label: "Pennsylvania", value: "PA", info: "abcd" },
  { label: "Rhode Island", value: "RI", info: "abcd" },
  { label: "South Carolina", value: "SC", info: "abcd" },
  { label: "South Dakota", value: "SD", info: "abcd" },
  { label: "Tennessee", value: "TN", info: "abcd" },
  { label: "Texas", value: "TX", info: "abcd" },
  { label: "Utah", value: "UT", info: "abcd" },
  { label: "Vermont", value: "VT", info: "abcd" },
  { label: "Virginia", value: "VA", info: "abcd" },
  { label: "Washington", value: "WA", info: "abcd" },
  { label: "West Virginia", value: "WV", info: "abcd" },
  { label: "Wisconsin", value: "WI", info: "abcd" },
  { label: "Wyoming", value: "WY", info: "abcd" }
];
class StateFinder extends Component {
  state = {
    selectedOption: null,
    modal: false
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {

    const { selectedOption } = this.state;

    return (
      <div>
        <Card className="p-3 bg-light">
          <h2>State Finder</h2>
          <FormGroup>
            <Select
              value={selectedOption}
              onCHange={this.handleChange}
              options={options} />
          </FormGroup>
        </Card>

        <div>
          <Modal>
            <ModalHeader><h1>{options.label}</h1></ModalHeader>
            <ModalBody><p>{options.info}</p></ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </div>
      </div>
    );
  };
};

export default StateFinder;
