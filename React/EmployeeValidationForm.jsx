import React from "react";
import {useState} from "react";

function EmployeeValidationForm() {
  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[employeeId, setEmployeeId]=useState("");
  const[joiningDate, setJoiningDate]=useState("");

  const [nameError,setNameError]=useState("Name must be at least 4 characters long and only contain letters and spaces");
  const [emailError,setEmailError]=useState("Email must be a valid email address");
  const [employeeIdError,setEmployeeIdError]=useState("Employee ID must be exactly 6 digits");
  const [joiningDateError,setJoiningDateError]=useState("Joining Date cannot be in the future");
  

const handleNameChange=(e)=>{
  
  const value=e.target.value;
  setName(value);
  const nameRegex=/^[A-Za-z\s]+$/;
  if(value.length>=4 && nameRegex.test(value)){
    setNameError("");
  }
  else{
    setNameError("Name must be at least 4 characters long and only contain letters and spaces");
  }
};
const handleEmailChange=(e)=>{
  const value=e.target.value;
  setEmail(value);
  const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if( emailRegex.test(value)){
   setEmailError("");
  }else{
    setEmailError("Email must be a valid email address");
  }
};
const handleEmployeeIdChange=(e)=>{
  const value=e.target.value;
  setEmployeeId(value);
const employeeIdRegex = /^\d{6}$/;
if(employeeIdRegex.test(value)){
  setEmployeeIdError("");
}else{
  setEmployeeIdError("Employee ID must be exactly 6 digits");
}

}
const handelJoiningDateChange=(e)=>{
  const value=e.target.value;
  setJoiningDate(value);
  const selectedDate=new Date(value);
  const today=new Date();
  today.setHours(0,0,0,0);
  if(selectedDate<=today){
    setJoiningDateError("");
  }else{
    setJoiningDateError("Joining Date cannot be in the future");
  }
}
const isFormValid = name && email&& employeeId && joiningDate&& !nameError&& !emailError && !joiningDateError&& !employeeIdError;
const handleSubmit=(e)=>{
 e.preventDefault();

if(!isFormValid)return;

setName("");
setEmail("");
setEmployeeId("");
setJoiningDate("");
setNameError("Name must be at least 4 characters long and only contain letters and spaces");
setEmailError("Email must be a valid email address");
setEmployeeIdError("Employee ID must be exactly 6 digits");
setJoiningDateError("Joining Date cannot be in the future");

}

  return (
    <div className="layout-column align-items-center mt-20 ">
     <form onSubmit={handleSubmit} className="w-50">
      <div className="layout-column align-items-start mb-10 " data-testid="input-name">
      
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {nameError && (
          <p data-testid="error-message" className="text-red-500 mt-2" >
            {nameError}
          </p>
        )}
       
      </div>
      <div className="layout-column align-items-start mb-10 " data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {/* <p className="error mt-2">Email must be a valid email address</p> */}
      </div>
      <div className="layout-column align-items-start mb-10 " data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
         value={employeeId}
        onChange={handleEmployeeIdChange}
          placeholder="Employee ID"
        />
        {/* <p className="error mt-2">Employee ID must be exactly 6 digits</p> */}
      </div>
      <div className="layout-column align-items-start mb-10 " data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joiningDate}
         onChange={handelJoiningDateChange}
          placeholder="Joining Date"
        />
        {/* <p className="error mt-2">Joining Date cannot be in the future</p> */}
      </div>
        <button 
        data-testid="submit-btn" 
        type="submit"
        disabled={!isFormValid}
        className="submit-btn">
        Submit
      </button>
      </form>
    </div>
  );
}

export default EmployeeValidationForm;
