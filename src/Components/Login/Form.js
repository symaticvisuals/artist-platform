import React from "react";
import { useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

//Form component to render the login and signup forms


 function Form() {
  

  const form = useSelector((state) => state.loginStatus.formStatus);
  return (
	  
    <div>
      {form === 1 ? <SignUpForm /> : <LoginForm />}
      
    </div>
	  	
  );
}
export {  Form };