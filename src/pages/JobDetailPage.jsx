import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobCard from "../components/JobCard.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  selectedJob: state.selectedJob.jobDetail,
});

const JobDetailPage = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.selectedJob && (
            <div>
              <p
                style={{ textTransform: "uppercase", weight: "bold" }}
                className="text-center"
              >
                {props.selectedJob.company}
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.selectedJob.description,
                }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(JobDetailPage);
