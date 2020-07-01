import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const DateField = ({ errors, touched, labelTitle, fieldName }) => {
   const { setFieldValue } = useFormikContext();
   const [field] = useField({ name: fieldName });

   return (
      <>
         <div className="form__row">
            <label htmlFor={fieldName}>{`${labelTitle}:`}</label>
            <DatePicker
               {...field}
               id={fieldName}
               className={`form__field ${
                  errors[fieldName] && touched[fieldName]
                     ? "form__field-error"
                     : ""
               }`}
               selected={(field.value && new Date(field.value)) || null}
               name={fieldName}
               locale="es"
               placeholderText={labelTitle}
               dateFormat="MMMM d, yyyy"
               onChange={(val) => {
                  setFieldValue(field.name, val);
               }}
            />
         </div>
         <ErrorMessage
            className="form__error-message"
            name="birthDate"
            component="small"
         />
      </>
   );
};

export default DateField;
