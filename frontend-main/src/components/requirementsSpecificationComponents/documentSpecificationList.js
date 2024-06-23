import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  addDocumentSpecification,
  selectDocuments,
  selectDocumentSpecification,
  selectDocumentsByIds,
} from "../../slices/documentSpecificationSlice";
import {
  addDocumentSpecificationToOrder,
  addOrder,
  deleteDocumentSpeficationWithOrderId,
  selectOrderById,
} from "../../slices/orderSlice";
import { useEffect } from "react";

function DocumentSpecificationList(props) {
  const dispatch = useDispatch();

  const order = useSelector((state) =>
    selectOrderById(state.orders, props.orderId)
  );
  console.log("----");
  console.log("order", order);

  const targetSpecifications = order ? order.documentSpecifications : [];

  const specs = useSelector((state) =>
    selectDocuments(state.documentSpecification)
  ).filter((spec) => targetSpecifications.includes(spec.id));

  useEffect(() => {
    if (order === undefined) {
      dispatch(addOrder({ id: props.orderId, documentSpecifications: [] }));
    }
  }, [props.orderId]);

  function handleDeleteSpecification(id) {
    dispatch(
      deleteDocumentSpeficationWithOrderId({
        documentSpecificationId: id,
        orderId: props.orderId,
      })
    );
  }

  function handleEditSpecification() {
    console.log("edit document");
  }

  const documents = useSelector((state) =>
    selectDocuments(state.documentSpecification)
  );

  return (
    <>
      {specs.map((spec) => (
        <Accordion key={spec.id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={spec.id}>
                {spec.values.university}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={spec.id}>
              <Card.Body>
                <div> Document type: {spec.values.documentTypes}</div>
                <div> University: {spec.values.university}</div>
                <div> Department: {spec.values.department}</div>
                <div> Document type: {spec.values.documentTypes}</div>
                <div> Color option: {spec.values.colorPick}</div>
                <div> Black and white pages: {spec.values.pages}</div>
                <div> Colored pages: {spec.values.coloredPages}</div>
                <div> Print features: {spec.values.printFeatures}</div>
                <div> Binding: {spec.values.binding}</div>
                <button
                  variant="link"
                  onClick={() => handleDeleteSpecification(spec.id)}
                >
                  Delete specification
                </button>
                <button variant="link" onClick={handleEditSpecification}>
                  Edit specification
                </button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}
export default DocumentSpecificationList;
