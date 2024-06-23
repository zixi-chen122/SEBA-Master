import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DocumentSpecificationForm from '../components/requirementsSpecificationComponents/document-specification-form'
import { useSelector } from "react-redux";
import { selectDocuments } from "../slices/documentSpecificationSlice";
// import { v4 as uuid } from "uuid";
// import { useState } from "react";
// import PropTypes from "prop-types";

import DocumentSpecificationList from "../components/requirementsSpecificationComponents/documentSpecificationList";

// DocumentSpecificationGroup.propTypes = {
//   orderID: PropTypes.string,
// };
const useStyles = makeStyles((theme) => ({
  button: {
    float: 'right'
  },
}));

function DocumentSpecificationView(props) {
  // TODO: generate order ID in backend
  const classes = useStyles();
  const orderID = "temp";
  const documents = useSelector((state) =>
    selectDocuments(state.documentSpecification)
  );
  function handleNext() {
    props.history.push("/copyshop_specification")
  }
  return (
    <div>
      <h1>So easy to print 🖨️</h1>
      <h2>What are your printing jobs?</h2>
      <DocumentSpecificationList orderId={orderID} />
      <div>
        <DocumentSpecificationForm
          orderId={orderID}
          handleNext={handleNext}
        />
      </div>
      <div> total documents: {documents.length}</div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}

export default withRouter(DocumentSpecificationView);