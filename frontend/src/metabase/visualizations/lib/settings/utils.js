import { isDimension, isMetric } from "metabase/lib/schema_metadata";
import {
  getFriendlyName,
  columnsAreValid,
  getDefaultDimensionAndMetric,
  getDefaultDimensionsAndMetrics,
} from "metabase/visualizations/lib/utils";
import _ from "underscore";
import {t} from "ttag";
import {getDefaultColumns} from "metabase/visualizations/lib/settings/graph";
import {GRAPH_DATA_SETTINGS} from './graph'
export function getOptionFromColumn(col) {
  // console.log("getFriendlyName(col) 名字：*****" + getFriendlyName(col))
  // console.log("col.name 名字 —— *****" + col.name)
  return {
    name: getFriendlyName(col),
    value: col.name,
  };
}

export function metricSetting(id, def = {}) {
  return fieldSetting(id, {
    fieldFilter: isMetric,
    getDefault: series => getDefaultDimensionAndMetric(series).metric,
    ...def,
  });
}

export function dimensionSetting(id, def = {}) {
  return fieldSetting(id, {
    fieldFilter: isDimension,
    getDefault: series => getDefaultDimensionAndMetric(series).dimension,
    ...def,
  });
}

const DEFAULT_FIELD_FILTER = () => true;

export function fieldSetting(

  id,

  { fieldFilter = DEFAULT_FIELD_FILTER, showColumnSetting, ...def } = {},
) {
  return {
    [id]: {

      widget: "field",
      isValid: ([{ card, data }], vizSettings) =>
        columnsAreValid(card.visualization_settings[id], data, fieldFilter),
      getDefault: ([{ data }]) => (_.find(data.cols, fieldFilter) || {}).name,
      getProps: ([{ card, data }], vizSettings) => ({
        options: data.cols.filter(fieldFilter).map(getOptionFromColumn),

        showColumnSetting: showColumnSetting,
        // addAnother:data.cols.length > vizSettings["graph.dimensions"] && vizSettings["graph.dimensions"].length < 2
        //   ? t`Add another series...`
        //   : null,
        columns: data.cols,


      }),

      ...def,
    },
  };
}
