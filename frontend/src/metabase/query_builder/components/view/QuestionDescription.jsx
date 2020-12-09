import React from "react";

import { t, ngettext, msgid } from "ttag";

import QuestionDataSource from "./QuestionDataSource";

import StructuredQuery from "metabase-lib/lib/queries/StructuredQuery";

const QuestionDescription = ({ question }) => {
  const query = question.query();
  if (query instanceof StructuredQuery) {
    const topQuery = query.topLevelQuery();
    const aggregations = topQuery.aggregations();
    const breakouts = topQuery.breakouts();
    const aggregationDescription =
      aggregations.length === 0
        ? null
        : aggregations.length > 2
        ? ngettext(
            msgid`${aggregations.length} metric`,
            `${aggregations.length} metrics`,
            aggregations.length,
          )
        : aggregations
            .map(aggregation => aggregation.displayName())
            .join(t` and `);
    // console.log("aggregationDescription————" + aggregations.map(aggregation => aggregation.dimension() && aggregation.dimension().field().name).join(t` and `));
    const breakoutDescription =
      breakouts.length === 0
        ? null
        : breakouts.length > 2
        ? ngettext(
            msgid`${breakouts.length} breakout`,
            `${breakouts.length} breakouts`,
            breakouts.length,
          )
        : breakouts.map(breakout => breakout.displayName()).join(t` and `);
    const a = aggregations.map(aggregation => aggregation.dimension() && aggregation.dimension().field().name).toString().toLowerCase();
    const b = breakouts.map(breakout => breakout.dimension() && breakout.dimension().field().name).toString().toLowerCase();
    // console.log("第一个字段————" + a,typeof (a));
    // console.log("第二个字段————" + b,typeof (b));

    if (aggregationDescription && breakoutDescription) {
      return (
        // <span>{t`${aggregationDescription} by ${breakoutDescription}`}</span>
        // <span>{aggregations.map(aggregation => aggregation.dimension() && aggregation.dimension().field().name)+"通过" +breakouts.map(breakout => breakout.dimension() && breakout.dimension().field().name) + "的分组求和：月"}</span>
        <span>{a +" 通过 "+ b + " 的分组求和"}</span>
        // <span>{a +" 通过 "+ b + " 的分组求和:月"}</span>
      );
    } else if (aggregationDescription) {
      return <span>{aggregationDescription}</span>;
    } else if (breakoutDescription) {
      return <span>{breakoutDescription}</span>;
    }
  }
  if (question.database()) {
    return <QuestionDataSource question={question} />;
  } else {
    return <span>{t`New question`}</span>;
  }
};

export default QuestionDescription;
