import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { t } from "ttag";
// import {Icon} from "antd";
// import {button} from "antd"
// import 'antd/dist/antd.css'
import "../../../../../meta-icon/iconfont.css"
import Settings from "metabase/lib/settings";
import Utils from "metabase/lib/utils";
import validate from "metabase/lib/validate";
import Form from "metabase/containers/Form";

import { login } from "../auth";

const mapDispatchToProps = { login };
const style={
        marginBottom:"-37px",
        position:"relative",
        zIndex:"2",
        height:"34",
        width:"34"
    };
@connect(
  null,
  mapDispatchToProps,
)
export default class LdapAndEmailForm extends Component {
  onSubmit = async credentials => {
    const { login, location } = this.props;
    await login(credentials, location.query.redirect);
  };

  render() {
    const ldapEnabled = Settings.ldapEnabled();
    const style = {
      // 自定义分析平台（税收调查数据）
      // backgroundColor:"rgba(34,49,81,0.5)",
      // 四川：自助式分析平台
      backgroundColor:"rgba(80,158,227,0.5)",
      margin:"18px auto",
      borderColor:"#ffffff",
      color:"#ffffff",
      paddingTop:"6px",
      width:"240px",
      height: "36px"
    };
    const inputStyle = {
      backgroundColor: "rgba(2,52,68,0.7)",
      borderColor: "transparent",
      width:"320px",
      color: "#ffffff",
      marginTop:"-20px"
    };
    const lineStyle = {
      border:"0.5px solid #fff",
      // width:"320px",
      marginTop: "-20px"
    };
    return (
      <Form onSubmit={this.onSubmit} >
        {({ values, Form, FormField, FormSubmit, FormMessage }) => (
          <Form>
            <FormField
              name="username"
              type={ldapEnabled ? "input" : "email"}
              className={"iconfont"}
              // title={
              //   ldapEnabled ? t`Username or email address` : t`Email address`
              // }
              style={inputStyle}
              // placeholder={"&#xe760;" + t`&#xe760;  请输入用户名`}
              placeholder="&#xe604;  账号"
              validate={ldapEnabled ? validate.required() : validate.email()}
            />
            {/*<input*/}
            {/*  type={ldapEnabled ? "input" : "email"}*/}
            {/*  className={"iconfont"}*/}
            {/*  style={inputStyle}*/}
            {/*  placeholder="&#xe604;  账号"*/}
            {/*  // validate={ldapEnabled ? validate.required() : validate.email()}*/}
            {/*/>*/}
            <div style={lineStyle}></div>
            <FormField
              name="password"
              style={inputStyle}
              type="password"
              // title={t`Password`}
              title=""
              placeholder="&#xe7c9;  密码"
              // placeholder={"&#xe761;" + t`&#xe761;  请输入密码`}
              validate={validate.required()}
            />

            <FormMessage />
            <div className="Form-actions flex align-center">
              {/*<button>{t`Sign in`}</button>*/}
              <FormSubmit style={style}>{t`Sign in`}</FormSubmit>
            </div>
          </Form>
        )}
      </Form>
    );
  }
}

const ForgotPasswordLink = ({ credentials = {} }) => (
  <Link
    to={
      "/auth/forgot_password" +
      (Utils.validEmail(credentials.username)
        ? "?email=" + encodeURIComponent(credentials.username)
        : "")
    }
    className="text-right ml-auto link"
    onClick={e => {
      window.OSX ? window.OSX.resetPassword() : null;
    }}
  >
    {t`I seem to have forgotten my password`}
  </Link>
);
