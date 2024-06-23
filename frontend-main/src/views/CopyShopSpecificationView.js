import { withRouter } from "react-router-dom";
import CopyshopSearchSpecificationForm from "../components/requirementsSpecificationComponents/copyshopSearchSpecificationForm.js";

import { useSelector } from "react-redux";
import { selectDocuments } from "../slices/documentSpecificationSlice";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types";

import DocumentSpecificationList from "../components/requirementsSpecificationComponents/documentSpecificationList";
// DocumentSpecificationGroup.propTypes = {
//   orderID: PropTypes.string,
// };

function CopyShopSpecificationView(props) {
  // TODO: generate order ID in backend
  const orderID = "temp";
  const documents = useSelector((state) =>
    selectDocuments(state.documentSpecification)
  );

  return (
    <div>
        <div>
          <DocumentSpecificationList orderId={orderID} />
          <h1>Copyshop search specification</h1>
          <CopyshopSearchSpecificationForm 
            handleNext={() => {props.history.push("/search_result")}} 
          />
          <div> total documents: {documents.length}</div>
        </div>
    </div>
  );
}

export default withRouter(CopyShopSpecificationView);