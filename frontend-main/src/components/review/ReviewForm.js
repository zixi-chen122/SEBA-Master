import React from 'react';
import { render } from 'react-dom';
import { Formik, Form, Field } from 'formik';
import FormRatings from 'form-ratings';

function ReviewByFeature(props) {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => { props.onSubmit(values) }}
    >
      {(props) => (
        <Form>
          <div>
            <h2>Overall Rating</h2>
            <Field name="overall" as={FormRatings} />
          </div>
          <div>
            <h2>Rating by feature</h2>
            <span>Rating (quality)</span>
            <Field name="quality" as={FormRatings} />
          </div>
          <div>
            <span>Rating (price)</span>
            <Field name="price" as={FormRatings} />
          </div>
          <div>
            <span>Rating (transport)</span>
            <Field name="transport" as={FormRatings} />
          </div>
          <div>
            <span>Rating (effiency)</span>
            <Field name="efficiency" as={FormRatings} />
          </div>
          <div>
            <span>Text Review</span>
            <Field name="comment" />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>

          <div>
            <button type="submit">Cancel</button>
          </div>


        </Form>
      )}
    </Formik>    //, document.getElementById('root'));
  )
}



export default ReviewByFeature
