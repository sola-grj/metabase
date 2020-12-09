import React from "react";

import CustomFormSetup from "./CustomFormSetup";

import { t } from "ttag";

const StandardFormSetup = ({ onClose, submitTitle, ...props }) => (
  <CustomFormSetup {...props}>
    {({ values, formFields, Form, FormField, FormFooter }) => (
      <Form>
        {formFields.map(formField => (
          <FormField key={formField.name} name={formField.name} />
        ))}
        <FormFooter
          onCancel={onClose}
          submitTitle={
            submitTitle || (values.id != null ? t`Update` : t`Create`)
          }
        />
      </Form>
    )}
  </CustomFormSetup>
);

export default StandardFormSetup;
