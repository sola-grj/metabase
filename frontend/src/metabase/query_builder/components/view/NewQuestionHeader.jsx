import React from "react";

import ViewSection, { ViewHeading } from "./ViewSection";
import {t} from "ttag";

export default function NewQuestionHeader(props) {
  return (
    <ViewSection {...props}>
      {/*<ViewHeading>{`Pick your starting data`}</ViewHeading>*/}
      <ViewHeading>{t`Pick your starting data`}</ViewHeading>
    </ViewSection>
  );
}
