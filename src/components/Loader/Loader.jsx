import React from 'react';
import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#ffc7c4', '#e1eae1', '#bdc2bd', '#97e75f', '#f5ebed']}
      />
    </div>
  );
};
export default Loader;