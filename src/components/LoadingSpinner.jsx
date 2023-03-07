import React from "react";
import { Puff } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#00BFFF"
        ariaLabel="puff-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
