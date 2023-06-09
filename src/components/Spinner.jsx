import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;