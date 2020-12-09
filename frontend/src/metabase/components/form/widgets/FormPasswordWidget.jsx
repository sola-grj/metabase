import React from "react";

// import FormInputWidget from "./FormInputWidget";
import LoginWidget from "./LoginWidget"

const FormPasswordWidget = props => (

  // <LoginWidget {...props} type="password" />
  <LoginWidget {...props}  onfocus="this.type='password'"/>
);



export default FormPasswordWidget;
