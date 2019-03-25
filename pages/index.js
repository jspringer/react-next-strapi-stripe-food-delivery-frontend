/* /pages/index.js */

import RestaurantList from "../components/RestaurantList";
import React from "react";
import defaultPage from "../hocs/defaultPage";
import { Layout } from "../components/Layout";
import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to RestaurantList for the filter query
    this.state = {
      query: ""
    };
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div className="container-fluid">
        <InputGroup className="search-bar" size="sm" style={{ width: "200px", position: "absolute", top: "14px", right: "200px" }}>
            <Input className="search-bar" placeholder="Search" onChange={this.onChange.bind(this)} />
        </InputGroup>
        <Row>
          <Col>
            <RestaurantList search={this.state.query} />
          </Col>
        </Row>
        <style jsx global>
          {`
            @media only screen and (max-width: 550px) {
              .search-bar {
                display: none; 
              } 
            } 
          `}
        </style>
      </div>
    );
  }
}

export default defaultPage(Index);