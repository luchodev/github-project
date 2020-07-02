import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RepoForm = ({
   initialValues,
   handleValidations,
   handleOnSubmit,
   placeHolder,
   isRequesting,
}) => {
   return (
      <Formik
         initialValues={initialValues}
         validate={handleValidations}
         onSubmit={handleOnSubmit}
      >
         {({ errors, handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
               <div className="query-repo-form">
                  <div className="query-repo-form__field">
                     <Field
                        className={`form__field ${
                           errors.gitUser && touched.gitUser
                              ? "form__field-error"
                              : ""
                        }`}
                        placeholder={placeHolder}
                        name="gitUser"
                     ></Field>
                     <ErrorMessage
                        className="form__error-message"
                        name="gitUser"
                        component="small"
                     />
                  </div>
                  <button
                     className={`form__btn form__btn--small ${
                        isRequesting ? "form__btn--disable" : ""
                     }`}
                  >
                     Consultar Repositorios
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default RepoForm;
