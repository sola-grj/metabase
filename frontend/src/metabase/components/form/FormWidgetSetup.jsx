import React from "react";

import FormInputWidget from "./widgets/FormInputWidget";
import FormEmailWidgetSetup from "./widgets/FormEmailWidgetSetup";
import FormTextAreaWidget from "./widgets/FormTextAreaWidget";
import FormPasswordWidgetSetup from "./widgets/FormPasswordWidgetSetup";
import FormCheckBoxWidget from "./widgets/FormCheckBoxWidget";
import FormColorWidget from "./widgets/FormColorWidget";
import FormSelectWidget from "./widgets/FormSelectWidget";
import FormNumericInputWidget from "./widgets/FormNumericInputWidget";
import FormToggleWidget from "./widgets/FormToggleWidget";
import FormCollectionWidget from "./widgets/FormCollectionWidget";
import FormHiddenWidget from "./widgets/FormHiddenWidget";

const WIDGETS = {
  input: FormInputWidget,
  email: FormEmailWidgetSetup,
  text: FormTextAreaWidget,
  checkbox: FormCheckBoxWidget,
  color: FormColorWidget,
  password: FormPasswordWidgetSetup,
  select: FormSelectWidget,
  integer: FormNumericInputWidget,
  boolean: FormToggleWidget,
  collection: FormCollectionWidget,
  hidden: FormHiddenWidget,
};

const FormWidgetSetup = ({ field, formField, ...props }) => {
  const Widget =
    (typeof formField.type === "string"
      ? WIDGETS[formField.type]
      : formField.type) || FormInputWidget;
  return <Widget field={field} {...formField} {...props} />;
};

export default FormWidgetSetup;
