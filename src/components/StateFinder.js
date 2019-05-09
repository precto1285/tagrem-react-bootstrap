import React, { Component } from 'react';
import { Card, FormGroup } from 'reactstrap';
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
      </div>
    );
  };
};

export default StateFinder;


// <Label for="exampleSelect">Select</Label>
//             <Input type="select" name="select" id="exampleSelect">
//               <option value="#">Select State</option>
//               <option value="AL">Alabama</option>
//               <option value="AK">Alaska</option>
//               <option value="AZ">Arizona</option>
//               <option value="AR">Arkansas</option>
//               <option value="CA">California</option>
//               <option value="CO">Colorado</option>
//               <option value="CT">Connecticut</option>
//               <option value="DE">Delaware</option>
//               <option value="DC">District Of Columbia</option>
//               <option value="FL">Florida</option>
//               <option value="GA">Georgia</option>
//               <option value="HI">Hawaii</option>
//               <option value="ID">Idaho</option>
//               <option value="IL">Illinois</option>
//               <option value="IN">Indiana</option>
//               <option value="IA">Iowa</option>
//               <option value="KS">Kansas</option>
//               <option value="KY">Kentucky</option>
//               <option value="LA">Louisiana</option>
//               <option value="ME">Maine</option>
//               <option value="MD">Maryland</option>
//               <option value="MA">Massachusetts</option>
//               <option value="MI">Michigan</option>
//               <option value="MN">Minnesota</option>
//               <option value="MS">Mississippi</option>
//               <option value="MO">Missouri</option>
//               <option value="MT">Montana</option>
//               <option value="NE">Nebraska</option>
//               <option value="NV">Nevada</option>
//               <option value="NH">New Hampshire</option>
//               <option value="NJ">New Jersey</option>
//               <option value="NM">New Mexico</option>
//               <option value="NY">New York</option>
//               <option value="NC">North Carolina</option>
//               <option value="ND">North Dakota</option>
//               <option value="OH">Ohio</option>
//               <option value="OK">Oklahoma</option>
//               <option value="OR">Oregon</option>
//               <option value="PA">Pennsylvania</option>
//               <option value="RI">Rhode Island</option>
//               <option value="SC">South Carolina</option>
//               <option value="SD">South Dakota</option>
//               <option value="TN">Tennessee</option>
//               <option value="TX">Texas</option>
//               <option value="UT">Utah</option>
//               <option value="VT">Vermont</option>
//               <option value="VA">Virginia</option>
//               <option value="WA">Washington</option>
//               <option value="WV">West Virginia</option>
//               <option value="WI">Wisconsin</option>
//               <option value="WY">Wyoming</option>
//             </Input>