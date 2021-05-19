import React from "react";
import styled from "styled-components";
import { Button, Form, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./homepage.css";

function HomePage(props) {
  return (
    <MainContainer>
      <SearchBox className="search-box p-5">
        <Form
          className="px-3 py-2"
          onSubmit={(e) =>
            props.submitQuery(e).then(props.history.push("/results"))
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
                onChange={props.handleInput}
                value={props.locationInput}
              />
            </Form.Group>
            <Form.Group controlId="positionInput" className="form-grup">
              <Form.Control
                style={{ width: "220px" }}
                className="my-2"
                type="text"
                placeholder="please type Positition"
                name="positionInput"
                onChange={props.handleInput}
                value={props.positionInput}
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

export default withRouter(HomePage);
