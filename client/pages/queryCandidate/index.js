import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { trackPromise } from "react-promise-tracker";

import CandidateDetails from "../../components/candidateDetails";
import { getGithubRepositories } from "../../services";
import LoadingSpinner from "../../components/spinner";
import RepoForm from "../../components/repoForm";
import { areas } from "../../utils/consts";

const QueryCandidate = () => {
   const [cookies] = useCookies();
   const [requesting, setRequesting] = useState(false);

   //  TODO: Validate passing the value of the cookie form parent component to avoid using the useCookies hook
   const candidate = cookies.candidate;

   const initialValues = {
      gitUser: "",
   };

   const handleOnSubmit = (values) => {
      setRequesting(true);
      trackPromise(
         getGithubRepositories(values.gitUser)
            .then((data) => {
               console.log(data);
               setRequesting(false);
            })
            .catch((err) => {
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
            placeHolder={candidate.gitUser}
            isRequesting={requesting}
         />
         <LoadingSpinner area={areas.gitRepository} />
      </>
   );
};

export default QueryCandidate;
