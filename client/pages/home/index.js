import React, { useState } from "react";
import { useCookies } from "react-cookie";

import QueryCandidate from "../../pages/queryCandidate";
import RegisterForm from "../../components/registerForm";

const Home = () => {
   const [_, setCookie] = useCookies(["candidate"]);
   const [viewForm, setViewForm] = useState(true);

   const initialValues = {
      name: "",
      lastName: "",
      identification: "",
      email: "",
      birthDate: "",
      gitUser: "",
   };

   const handleOnSubmit = (values) => {
      setCookie("candidate", JSON.stringify(values), { path: "/" });
      setCandidate(values);
      setViewForm(false);
      //TODO: verificar todos los 'console.log' en el proyecto
      console.log(values);
      console.log("Form submitted");
   };

   const handleValidations = (values) => {
      const errors = {};
      if (!values.name) {
         errors.name = "El campo Nombre es requerido";
      }

      if (!values.lastName) {
         errors.lastName = "El campo Apellido es requerido";
      }

      if (!values.email) {
         errors.email = "El campo E-mail es requerido";
      }

      if (!values.identification) {
         errors.identification = "El campo Cedula es requerido";
      }

      if (!values.birthDate) {
         errors.birthDate = "El campo Fecha de nacimiento es requerido";
      }

      if (!values.gitUser) {
         errors.gitUser = "El campo Usuario en Github es requerido";
      }

      return errors;
   };

   return (
      <div className="home">
         <div className="home__container">
            {!viewForm ? (
               <RegisterForm
                  initialValues={initialValues}
                  handleValidations={handleValidations}
                  handleOnSubmit={handleOnSubmit}
               />
            ) : (
               <QueryCandidate />
            )}
         </div>
      </div>
   );
};

export default Home;
