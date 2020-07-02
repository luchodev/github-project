import axios from "axios";

const getCall = (url, predicate) => {
   const result = new Promise((resolve, reject) => {
      axios
         .get(url)
         .then((response) => {
            resolve(predicate(response.data));
         })
         .catch((err) => {
            reject(err);
         });
   });

   return result;
};

export { getCall };
