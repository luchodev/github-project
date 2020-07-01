import axios from "axios";

const getCall = (url, predicate) => {
   const query = new Promise((resolve, reject) => {
      axios
         .get(url)
         .then((response) => {
            resolve(predicate(response.data));
         })
         .catch((err) => {
            console.log(`err en getcall= ${err}`);
            reject(err);
         });
   });

   return query;
};

export { getCall };
