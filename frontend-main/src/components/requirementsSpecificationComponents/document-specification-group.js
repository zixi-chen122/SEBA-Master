import DocumentSpecificationForm from "./document-specification-form.js";
import CopyshopSearchSpecificationForm from "./copyshopSearchSpecificationForm.js";
import { useSelector } from "react-redux";
import { selectDocuments } from "../slices/documentSpecificationSlice";
import { useState } from "react";
import PropTypes from "prop-types";

import DocumentSpecificationList from "./documentSpecificationList";

DocumentSpecificationGroup.propTypes = {
  orderID: PropTypes.string,
};

function DocumentSpecificationGroup(props) {
  // TODO: generate order ID in backend
  const { orderID } = props;

  const documents = useSelector((state) =>
    selectDocuments(state.documentSpecification)
  );

  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep(currentStep + 1);
  }

  function handleGoBack() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      {currentStep === 0 && (
        <div>
          <DocumentSpecificationList orderId={orderID} />
          <div>
            <DocumentSpecificationForm
              orderId={orderID}
              onSubmit={handleNextStep}
            />
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <DocumentSpecificationList orderId={orderID} />
          <CopyshopSearchSpecificationForm onSubmit={handleNextStep} />
          Next Step <button onClick={handleGoBack}> Back </button>{" "}
        </div>
      )}
      {currentStep === 3 && <div>Show map once some stores were fetched</div>}
    </div>
  );
}

export default DocumentSpecificationGroup;
