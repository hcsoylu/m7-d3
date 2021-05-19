import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "../components/JobCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  favJobs: state.fav.jobs,
});

const FavoritesPage = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.favJobs &&
            props.favJobs.map((result) => (
              <JobCard
                submitJobId={props.submitJobId}
                key={result.id}
                jobDesc={result}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(FavoritesPage);
