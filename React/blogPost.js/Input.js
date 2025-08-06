import React, { useState } from "react";

function Input() {
 
  return (
    <div className="layout-column justify-content-center align-items-center" onSu>
      <input className="w-100" type="text" placeholder="Enter Title" value={"Title"} data-testid="title-input" />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={"Description"} data-testid="description-input" />
    </div>
  );
}

export default Input;