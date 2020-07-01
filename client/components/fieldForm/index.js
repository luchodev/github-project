import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ errors, touched, labelTitle, fieldName }) => {
   return (
      <>
         <div className="form__row">
            <label htmlFor={fieldName}>{`${labelTitle}:`}</label>
            <Field
               className={`form__field ${
                  errors[fieldName] && touched[fieldName]
                     ? "form__field-error"
                     : ""
               }`}
               placeholder={labelTitle}
               name={fieldName}
               id={fieldName}
            ></Field>
         </div>
         <ErrorMessage
            className="form__error-message"
            name={fieldName}
            component="small"
         />
      </>
   );
};

export default FormField;
