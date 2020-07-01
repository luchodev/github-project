import { getCall } from "./../utils/httpCall";
import { githubBaseURL } from "../utils/consts";

const getGithubRepositories = (user) => {
   let url = `${githubBaseURL}/users/${user}/repos`;
   const filterPredicate = (data) => {
      return data.map((x) => {
         return {
            name: x.name,
            description: x.description,
            language: x.language,
            defaultBranch: x.default_branch,
            url: x.html_url,
         };
      });
   };

   return getCall(url, filterPredicate);
};

export { getGithubRepositories };
