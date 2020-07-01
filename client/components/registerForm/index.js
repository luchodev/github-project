import React from "react";
import { Formik, Form } from "formik";

import FormField from "../fieldForm";
import DateField from "../dateField";

const RegisterForm = ({ initialValues, handleValidations, handleOnSubmit }) => {
   return (
      <>
         <h4 className="home__title">Registro de candidato</h4>
         <Formik
            initialValues={initialValues}
            validate={handleValidations}
            onSubmit={handleOnSubmit}
         >
            {({ errors, handleSubmit, touched }) => (
               <Form className="form" onSubmit={handleSubmit}>
                  <FormField
                     labelTitle="Nombre"
                     fieldName="name"
                     errors={errors}
                     touched={touched}
                  />
                  <FormField
                     labelTitle="Apellido"
                     fieldName="lastName"
                     errors={errors}
                     touched={touched}
                  />
                  <FormField
                     labelTitle="Cedula"
                     fieldName="identification"
                     errors={errors}
                     touched={touched}
                  />
                  <DateField
                     labelTitle="Fecha de Nacimiento"
                     fieldName="birthDate"
                     errors={errors}
                     touched={touched}
                  />
                  <FormField
                     labelTitle="Email"
                     fieldName="email"
                     errors={errors}
                     touched={touched}
                  />
                  <FormField
                     labelTitle="Usuario en Github"
                     fieldName="gitUser"
                     errors={errors}
                     touched={touched}
                  />

                  <button className="form__btn">Registrarse</button>
               </Form>
            )}
         </Formik>
      </>
   );
};

export default RegisterForm;
