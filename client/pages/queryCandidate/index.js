import React from "react";
import { useCookies } from "react-cookie";

const QueryCandidate = () => {
   const [cookies, setCookies] = useCookies();
   const candidate = cookies.candidate;
   const fakeData = {
      name: "Luis Arley",
      lastName: "Ruiz Bolivar",
      identification: "1013642552",
      email: "luis20164@hotmail.es",
      birthDate:
         "Date Thu Aug 05 1993 00:00:00 GMT-0500 (Colombia Standard Time)",
      gitUser: "https://github.com/luchodev",
   };
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

export default QueryCandidate;
