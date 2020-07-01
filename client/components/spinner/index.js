import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const LoadingSpinner = (props) => {
   const { promiseInProgress } = usePromiseTracker({ area: props.area });
   return (
      promiseInProgress && (
         <div className="spinner">
            <Loader className="spinner__loader" type="Bars" />
         </div>
      )
   );
};

export default LoadingSpinner;
