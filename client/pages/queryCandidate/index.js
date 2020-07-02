import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";

import CandidateDetails from "../../components/candidateDetails";
import { getGithubRepositories } from "../../services";
import LoadingSpinner from "../../components/spinner";
import RepoForm from "../../components/repoForm";
import CustomTable from "../../components/customTable";
import { areas } from "../../utils/consts";

const QueryCandidate = () => {
   const [cookies] = useCookies();
   const [requesting, setRequesting] = useState(false);
   const [repositories, setRepositories] = useState([]);
   const candidate = cookies.candidate;

   const initialValues = {
      gitUser: candidate.gitUser,
   };

   const handleOnSubmit = (values) => {
      setRepositories([]);
      setRequesting(true);
      trackPromise(
         getGithubRepositories(values.gitUser)
            .then((data) => {
               if (data.length == 0) {
                  toast.warn("El usario no tiene repositorios.");
               }
               setRepositories(data);
               setRequesting(false);
            })
            .catch((err) => {
               toast.error(
                  "Ha ocurrido un error en la consulta, por favor verifica el usuario ingresado."
               );
               setRequesting(false);
            }),
         areas.gitRepository
      );
   };

   const handleValidations = (values) => {
      const errors = {};
      if (!values.gitUser) {
         errors.gitUser = "El usuario es requerido";
      }

      return errors;
   };

   return (
      <>
         <CandidateDetails />
         <RepoForm
            initialValues={initialValues}
            handleValidations={handleValidations}
            handleOnSubmit={handleOnSubmit}
            placeHolder="Ingresa el usuario de Github"
            isRequesting={requesting}
         />
         <LoadingSpinner area={areas.gitRepository} />
         {repositories.length > 0 ? <CustomTable data={repositories} /> : null}
      </>
   );
};

export default QueryCandidate;
