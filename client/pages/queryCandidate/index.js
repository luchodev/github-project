import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { trackPromise } from "react-promise-tracker";

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
               // console.log(JSON.stringify(data));
               setRepositories(data);
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

   const fakeData = [
      {
         name: "AdvancedCSS-Flexbox",
         description: "App to learn Flexbox in CSS3",
         language: "CSS",
         defaultBranch: "master",
         url: "https://github.com/luchodev/AdvancedCSS-Flexbox",
      },
      {
         name: "AdvancedCSS-GridCSS",
         description: "Advanced CSS - Grid CSS",
         language: "CSS",
         defaultBranch: "master",
         url: "https://github.com/luchodev/AdvancedCSS-GridCSS",
      },
      {
         name: "AdvancedCSS-Tours-App",
         description: "Advanced CSS, Sass, Flexbox, Animations",
         language: "CSS",
         defaultBranch: "master",
         url: "https://github.com/luchodev/AdvancedCSS-Tours-App",
      },
      {
         name: "angulargame",
         description: "Tic-Tac-Toe Angular Game",
         language: "TypeScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/angulargame",
      },
      {
         name: "angularlearning",
         description: "Learning Angular 4",
         language: "TypeScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/angularlearning",
      },
      {
         name: "citybike-app",
         description: null,
         language: "JavaScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/citybike-app",
      },
      {
         name: "github-project",
         description: null,
         language: "CSS",
         defaultBranch: "master",
         url: "https://github.com/luchodev/github-project",
      },
      {
         name: "NodeCI",
         description: "Continuous Integration Server for NodeJS ",
         language: "JavaScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/NodeCI",
      },
      {
         name: "react-firebase",
         description: "React app with firebase",
         language: "JavaScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/react-firebase",
      },
      {
         name: "react-hooks",
         description: null,
         language: "JavaScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/react-hooks",
      },
      {
         name: "react-hooks-firebase",
         description: null,
         language: "JavaScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/react-hooks-firebase",
      },
      {
         name: "realTimePoll",
         description: "Poll application made with Angular and Socket.IO",
         language: "TypeScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/realTimePoll",
      },
      {
         name: "vote-app",
         description: "Vote-application to rate the famous people",
         language: "TypeScript",
         defaultBranch: "master",
         url: "https://github.com/luchodev/vote-app",
      },
   ];

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
         <CustomTable data={repositories} />
         {/* <CustomTable data={fakeData} /> */}
      </>
   );
};

export default QueryCandidate;
