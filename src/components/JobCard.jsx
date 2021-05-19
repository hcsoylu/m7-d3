import React from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { addToFavAction } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addToFav: (jobObj) => dispatch(addToFavAction(jobObj)),
});

function JobCard({ history, jobDesc, submitJobId, addToFav }) {
  return (
    <Card className="mb-2 mt-2">
      <Card.Header>{jobDesc.title}</Card.Header>
      <Card.Body>
        <Card.Title>{jobDesc.company}</Card.Title>
        <div className="d-flex justify-content-between">
          <img
            src={jobDesc.company_logo}
            style={{ height: "40px", width: "40px" }}
            alt=""
          />
          {/* <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        /> */}
          <div>
            <Button
              variant="primary"
              onClick={() =>
                submitJobId(jobDesc.id).then(
                  history.push(`/results/${jobDesc.id}`)
                )
              }
            >
              Apply now!
            </Button>
            <Button variant="outline-danger" onClick={() => addToFav(jobDesc)}>
              Add to fav!
            </Button>{" "}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobCard));
