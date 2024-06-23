import React, { useEffect } from "react";
import { Form, Formik, useField, Field } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import CustomSelect from "./customSelect";
import { useDispatch, useSelector  } from "react-redux";
import { addCopyshopSearchSpecification } from "../../slices/copyshopSearchSpecificationSlice";
import FormikPlacesAutocomplete from "./FormikPlacesAutocomplete.jsx";

import { changeTestCopyshopSearchSpecification } from "../../slices/testCopyshopSearchSpecificationSlice";

function CopyshopSearchSpecificationForm(props) {
  const dispatch = useDispatch(); // each of the redux actions needs to be dispatched to the store
  const { handleNext } = props;
  const testCopyshopSearchSpecification = useSelector((state) => state.testCopyshopSearchSpecification);
//   useEffect(() => {
//     console.log("hererchange????")
//     console.log(testCopyshopSearchSpecification.option)

// }, [testCopyshopSearchSpecification.option]);
  function handleSubmit(values, { resetForm, setSubmitting }) {
    // TODO: @XIN adapt backend response
    // const response = await fetch(
    //   `http://localhost:4000/copyshop?location=${values.location}&deliveryType=${values.deliveryType}&timeToDelivery=${values.timeToDelivery}`
    // );
    // const stores = await response.json();
    
    // if (stores.length > 0) {
    //   dispatch(
    //     addCopyshopSearchSpecification({ ...values, id: uuid(), stores })
    //   );
    //   handleNext();
    // }
    // console.log(values)
    dispatch(changeTestCopyshopSearchSpecification(values))
    
    // console.log(testCopyshopSearchSpecification.option)
    // console.log("-----------")
    handleNext();
    // setSubmitting(false);
  }
  // 
  return (
    <Formik
      initialValues={testCopyshopSearchSpecification.option}
      validationSchema={Yup.object({
        location: Yup.object().shape({
          value: Yup.string().required("Address is required"),
          address: Yup.string().required("Invalid address"),
        }),
        deliveryType: Yup.string().required("Required"),
        timeToDelivery: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        values,
        touched,
        isSubmitting,
        setSubmitting,
        resetForm,
        setFieldValue,
      }) => {
        return (
          <Form>
            
            <Field name="location" 
              component={FormikPlacesAutocomplete} 
              value={values.location.address}
            />
            <CustomSelect label="deliveryType" name="deliveryType">
              <option value="" label="Select delivery type" />
              <option value="pickUp">Pick up</option>
              <option value="delivery">Delivery</option>
            </CustomSelect>

            <CustomSelect label="timeToDelivery" name="timeToDelivery">
              <option value="" label="Select delivery time" />
              <option value="immediately">Immediately</option>
              <option value="later">Later</option>
            </CustomSelect>

            <button variant="success" type="submit">
              {isSubmitting ? "Loading..." : "Search"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CopyshopSearchSpecificationForm;
