import { Form, Formik, useField, Field } from "formik";
import * as Yup from "yup";
import RadioButtonGroup from "./radio-button-group";
import RadioButton from "./radio-button";
import { useDispatch, useSelector } from "react-redux";
import { addDocumentSpecification } from "../../slices/documentSpecificationSlice";
import { v4 as uuid } from "uuid";
import { addDocumentSpecificationToOrder } from "../../slices/orderSlice";
import TemplateListModal from "./templateComponent/templateListModal";
import { useState } from "react";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label} </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error} </div>
      ) : null}
    </>
  );
};

function DocumentSpecificationForm(props) {
  const dispatch = useDispatch(); // each of the redux actions needs to be dispatched to the store
  const { handleNext, orderID } = props;
  const SUPPORTED_FORMATS = ["application/pdf"];

  const validationSchema = Yup.object().shape({
    documentTypes: Yup.string().required("Required"),
    pages: Yup.number().required("Required"),
    coloredPages: Yup.number().required("Required"),
    department: Yup.string().required("Required"),
    university: Yup.string().required("Required"),
    colorPick: Yup.string().required("Required"),
    printFeatures: Yup.string().required("Required"),
    paperQuality: Yup.string().required("Required"),
    binding: Yup.string().required("Required"),
    file: Yup.mixed()
      .required("Required")
      .test(
        "fileFormat",
        "Unsupported Format. Please upload a .pdf file.",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  async function handleAddDocument(
    { file, ...values },
    { resetForm, setSubmitting }
  ) {
    const fileID = await handleUploadDocument(file);
    const documentSpecification = { values, id: uuid(), fileID };
    dispatch(
      addDocumentSpecificationToOrder({
        orderId: props.orderId,
        documentSpecification,
      })
    );
    resetForm();
    setSubmitting(false);
  }

  async function handleUploadDocument(file) {
    // TODO @XIN change endpoint here
    fetch("https://api.example.com/items", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return result.fileId; // TODO @XIN need to generate fileId in backend I used uuid() you could use that as well
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function handleSubmit(...args) {
    handleAddDocument(...args);
    handleNext();
  }

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            documentTypes: "",
            pages: "",
            coloredPages: "",
            university: "",
            department: "",
            colorPick: "",
            printFeatures: "",
            paperQuality: "",
            binding: "",
            file: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          onChange={console.log}
        >
          {({
            errors,
            values,
            touched,
            isSubmitting,
            setSubmitting,
            resetForm,
            setFieldValue,
            validateForm,
            setErrors,
            setValues,
            handleChange,
          }) => {
            return (
              <div>
                <TemplateListModal data={values} setValues={setValues} />
                <Form>
                  <h1>Document specification</h1>

                  <CustomSelect label="Document type" name="documentTypes">
                    <option value="" label="Select a document type" />
                    <option value="normalPDF">Normal PDF</option>
                    <option value="thesis">Thesis</option>
                    <option value="script">Script</option>
                  </CustomSelect>

                  <CustomSelect label="University" name="university">
                    <option value="" label="Select an university" />
                    <option value="none">None</option>
                    <option value="tum">TUM</option>
                    <option value="lmu">LMU</option>
                    <option value="hsm">HSM</option>
                  </CustomSelect>

                  <CustomSelect label="Department" name="department">
                    <option value="" label="Select a department" />
                    <option value="none">None</option>
                    <option value="architecture" label="Architecture" />
                    <option value="informatics" label="Informatics" />
                    <option
                      value="mechanical-engineering"
                      label="Mechanical Engineering"
                    />
                    <option value="mathematics" label="Mathematics" />
                    <option value="management" label="Management" />
                    <option value="medicine" label="Medicine" />
                    <option value="physics" label="Physics" />
                  </CustomSelect>

                  <RadioButtonGroup
                    id="colorPick"
                    label="Please pick a color option"
                    value={values.colorPick}
                    error={errors.colorPick}
                    touched={touched.colorPick}
                  >
                    <Field
                      component={RadioButton}
                      name="colorPick"
                      id="black-white"
                      label="Black and white"
                    />
                    <Field
                      component={RadioButton}
                      name="colorPick"
                      id="color"
                      label="Color"
                    />
                  </RadioButtonGroup>

                  <label>Pages</label>
                  <input
                    id="pages"
                    name="pages"
                    type="number"
                    onChange={handleChange}
                    value={values.pages}
                  />
                  {errors.pages && touched.pages && <div>{errors.pages}</div>}

                  <label>Colored pages</label>
                  <input
                    id="coloredPages"
                    name="coloredPages"
                    type="number"
                    onChange={handleChange}
                    value={values.coloredPages}
                  />
                  {errors.coloredPages && touched.coloredPages && (
                    <div>{errors.coloredPages}</div>
                  )}

                  <RadioButtonGroup
                    id="printFeatures"
                    label="Please pick a printing feature"
                    value={values.printFeatures}
                    error={errors.printFeatures}
                    touched={touched.printFeatures}
                  >
                    <Field
                      component={RadioButton}
                      name="printFeatures"
                      id="simplex"
                      label="Simplex"
                    />
                    <Field
                      component={RadioButton}
                      name="printFeatures"
                      id="duplex"
                      label="Duplex"
                    />
                  </RadioButtonGroup>

                  <RadioButtonGroup
                    id="paperQuality"
                    label="Please pick a paper quality option"
                    value={values.paperQuality}
                    error={errors.paperQuality}
                    touched={touched.paperQuality}
                  >
                    <Field
                      component={RadioButton}
                      name="paperQuality"
                      id="70gr"
                      label="70 gr"
                    />
                    <Field
                      component={RadioButton}
                      name="paperQuality"
                      id="80gr"
                      label="80 gr"
                    />

                    <Field
                      component={RadioButton}
                      name="paperQuality"
                      id="100gr"
                      label="100 gr"
                    />

                    <Field
                      component={RadioButton}
                      name="paperQuality"
                      id="120gr"
                      label="120 gr"
                    />
                  </RadioButtonGroup>

                  <RadioButtonGroup
                    id="binding"
                    label="Please pick a binding option"
                    value={values.binding}
                    error={errors.binding}
                    touched={touched.binding}
                  >
                    <Field
                      component={RadioButton}
                      name="binding"
                      id="no-binding"
                      label="No binding"
                    />
                    <Field
                      component={RadioButton}
                      name="binding"
                      id="softcover"
                      label="Softcover binding"
                    />
                    <Field
                      component={RadioButton}
                      name="binding"
                      id="glued"
                      label="Glued binding"
                    />
                    <Field
                      component={RadioButton}
                      name="binding"
                      id="spiral"
                      label="Spiral binding"
                    />
                    <Field
                      component={RadioButton}
                      name="binding"
                      id="hardcover"
                      label="Hardcover binding"
                    />
                  </RadioButtonGroup>

                  <input
                    id="file"
                    name="file"
                    type="file"
                    error={errors.file}
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                  {errors.file && touched.file && <div>{errors.file}</div>}

                  <button variant="success" type="submit">
                    {isSubmitting ? "Loading..." : "Submit"}
                  </button>
                  <button type="reset" onClick={resetForm}>
                    Reset All
                  </button>
                  <button
                    onClick={() =>
                      validateForm().then((errors) =>
                        Object.keys(errors).length === 0
                          ? handleAddDocument(values, {
                              resetForm,
                              setSubmitting,
                            })
                          : setErrors(errors)
                      )
                    }
                  >
                    {" "}
                    Add more documents{" "}
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default DocumentSpecificationForm;
