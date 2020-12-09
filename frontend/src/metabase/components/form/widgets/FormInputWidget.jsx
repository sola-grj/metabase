import React from "react";
// import "../../../../../../meta-icon/iconfont.css";

import { formDomOnlyProps } from "metabase/lib/redux";

const FormInputWidget = ({ type = "text", placeholder, field }) => (
  <input
    // style={inputStyle}
    className="Form-input full "
    autoComplete="off"
    type={type}
    placeholder={placeholder}
    aria-labelledby={`${field.name}-label`}
    {...formDomOnlyProps(field)}
  />
);

export default FormInputWidget;
