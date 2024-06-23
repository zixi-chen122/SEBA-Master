import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function TemplateList(props) {
  const { templates, setValues } = props;

  function selectTemplate(specs) {
    setValues(specs);
  }

  return (
    <>
      {templates.map((specs) => (
        <Accordion key={specs._id}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={specs._id}>
                {specs.label}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={specs._id}>
              <Card.Body>
                <div> Document type: {specs.documentType}</div>
                <div> University: {specs.documentType}</div>
                <div> Department: {specs.department}</div>
                <div> Document type: {specs.documentType}</div>
                <div> Color option: {specs.colorPick}</div>
                <div> Print features: {specs.printFeatures}</div>
                <div> Binding: {specs.binding}</div>

                <button variant="link" onClick={() => selectTemplate(specs)}>
                  Select template
                </button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </>
  );
}
export default TemplateList;
