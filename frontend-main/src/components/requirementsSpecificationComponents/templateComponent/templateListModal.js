import { Modal } from "react-bootstrap";
import { useState } from "react";
import TemplateList from "./templateList";
import HttpService from "../../../services/HttpService"

function getTemplates(URL) {
  return new Promise(async (resolve, reject) => {
      HttpService.get(
          URL,
          function (data) {
              resolve(data);
          },
          function (textStatus) {
              reject(textStatus);
          }
      );
  });
}
function TemplateListModal(props) {
  const [show, setShow] = useState(false);
  const [templates, setTemplates] = useState([]);
  const handleClose = () => setShow(false);
  const { documentTypes, university, department } = props.data;

  async function handleSearchRequirements() {
    // TODO @XIN change endpoint here
    // TODO @XIN remove try catch block after modification
    let URL = `http://localhost:4000/templates?university=${university}&department=${department}&documentTypes=${documentTypes}`
    try {
      let templates = await getTemplates(URL)
      setTemplates(templates);
    } catch(e) {
      setTemplates([]);
    }
    setShow(true);
  }

  return (
    <>
      <button variant="primary" onClick={handleSearchRequirements}>
        Search templates
      </button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Document templates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {templates.length
            ? <TemplateList templates={templates} setValues={props.setValues} />
            : <div>Sorry,there is no templates in our database</div>
          }
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TemplateListModal;
