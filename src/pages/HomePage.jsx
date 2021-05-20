import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./homepage.css";
import { getSearchResultsAction } from "../actions/index";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (e, location, position) =>
    dispatch(getSearchResultsAction(e, location, position)),
});

class HomePage extends Component {
  state = {
    locationInput: "",
    positionInput: "",
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    console.log("ID OF THIS INPUT FIELD IS", name);

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <MainContainer>
        <SearchBox className="search-box p-5">
          <Form
            className="px-3 py-2"
            onSubmit={(e) =>
              this.props
                .getSearchResults(
                  e,
                  this.state.locationInput,
                  this.state.positionInput
                )
                .then(this.props.history.push("/results"))
            }
          >
            <div>
              <Form.Group controlId="locationInput" className="form-grup ">
                <Form.Control
                  style={{ width: "220px" }}
                  className="my-2"
                  type="text"
                  placeholder="please type Location"
                  name="locationInput"
                  onChange={this.handleInput}
                  value={this.state.locationInput}
                />
              </Form.Group>
              <Form.Group controlId="positionInput" className="form-grup">
                <Form.Control
                  style={{ width: "220px" }}
                  className="my-2"
                  type="text"
                  placeholder="please type Positition"
                  name="positionInput"
                  onChange={this.handleInput}
                  value={this.state.positionInput}
                />
              </Form.Group>{" "}
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </SearchBox>
      </MainContainer>
    );
  }
}

const MainContainer = styled(Container)`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93vh;
  width: 100vw;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  min-width: 220px;
  padding: 5px;
  border: solid 1px;
  border-radius: 10px;
`;

export default connect(null, mapDispatchToProps)(withRouter(HomePage));
