import React from "react";
import { useCookies } from "react-cookie";

const CandidateDetails = () => {
   const [cookies] = useCookies();
   const candidate = cookies.candidate;

   return (
      <div className="candidate">
         <div className="candidate__item">
            <label>Nombre:</label>
            <span>{candidate.name}</span>
         </div>
         <div className="candidate__item">
            <label>Apellido:</label>
            <span>{candidate.lastName}</span>
         </div>
         <div className="candidate__item">
            <label>Cedula:</label>
            <span>{candidate.identification}</span>
         </div>
         <div className="candidate__item">
            <label>E-mail:</label>
            <span>{candidate.email}</span>
         </div>
         <div className="candidate__item">
            <label>F. Nacimiento:</label>
            <span>
               {new Date(candidate.birthDate).toISOString().substr(0, 10)}
            </span>
         </div>
         <div className="candidate__item">
            <label>Usuario Github:</label>
            <span>{candidate.gitUser}</span>
         </div>
      </div>
   );
};

export default CandidateDetails;
