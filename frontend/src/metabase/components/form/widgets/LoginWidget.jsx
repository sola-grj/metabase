import React from "react";
import "../../../../../../meta-icon/iconfont.css";

import { formDomOnlyProps } from "metabase/lib/redux";

const inputStyle = {
      // 四川：自助式分析平台
      backgroundColor: "rgba(80,158,227,0.5)",
      // 自定义分析平台（税收调查数据）
      // backgroundColor: "rgba(34,49,81,0.5)",
      borderColor: "transparent",
      width:"364px",
      height:"45px",
      color:"#ffffff",
      paddingLeft:"2px"
    };
const LoginWidget = ({ type = "text", placeholder, field }) => (
  <input
    style={inputStyle}
    autoComplete="off"
    className="Form-input full iconfont"
    type={type}
    placeholder={placeholder}
    aria-labelledby={`${field.name}-label`}
    {...formDomOnlyProps(field)}
  />
);
            {/*<img src={[require("../image/unlock.png")]} height={24} width={24} alt=""/>*/}

// const userIcon = ({src = "111",height="24"})
// export default FormInputWidget;
export default LoginWidget;
