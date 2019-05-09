import React, { Component } from 'react';
import { Card, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';

const options = [
  { label: "Select State", value: "0", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Alabama", value: "AL", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Alaska", value: "AK", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Arizona", value: "AZ", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Arkansas", value: "AR", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "California", value: "CA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Colorado", value: "CO", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Connecticut", value: "CT", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Delaware", value: "DE", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "District of Columbia", value: "DC", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Florida", value: "FL", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Georgia", value: "GA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Hawaii", value: "HI", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Idaho", value: "ID", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Illinois", value: "IL", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Indiana", value: "IN", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Iowa", value: "IA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Kansas", value: "KS", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Kentucky", value: "KY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Louisiana", value: "LA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Maine", value: "ME", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Maryland", value: "MD", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Massachusetts", value: "MA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Michigan", value: "MI", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Minnesota", value: "MN", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Mississippi", value: "MS", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Missouri", value: "MO", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Montana", value: "MT", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Nebraska", value: "NE", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Nevada", value: "NV", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "New Hampshire", value: "NH", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "New Jersey", value: "NJ", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "New Mexico", value: "NM", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "New York", value: "NY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "North Carolina", value: "NC", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "North Dakota", value: "ND", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Ohio", value: "OH", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Oklahoma", value: "OK", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Oregon", value: "OR", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Pennsylvania", value: "PA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Rhode Island", value: "RI", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "South Carolina", value: "SC", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "South Dakota", value: "SD", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Tennessee", value: "TN", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Texas", value: "TX", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Utah", value: "UT", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Vermont", value: "VT", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Virginia", value: "VA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Washington", value: "WA", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "West Virginia", value: "WV", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Wisconsin", value: "WI", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" },
  { label: "Wyoming", value: "WY", info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?" }
];
class StateFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  handleChange = (selectedOption) => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }))
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
              onChange={this.handleChange}
              options={options}
              onInputChange={this.showModal} />
          </FormGroup>
        </Card>

        <div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}><h1>State</h1></ModalHeader>
            <ModalBody><p>Some Text</p></ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>

        </div>
      </div>
    );
  };
};

export default StateFinder;
