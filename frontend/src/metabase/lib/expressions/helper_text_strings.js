import { t } from "ttag";

const helperTextStrings = [
  {
    name: "average",
    structure: "avg(" + t`column` + ")",
    description: t`Returns the average of the values in the column.`,
    example: "avg( [" + t`Quantity` + "] )",
    args: [
      { name: t`column`, description: t`The column whose values to average.` },
    ],
  },
  {
    name: "between",
    structure: "between(" + t`列` + "," + t`起始位置` + "," + t`终止位置` + ")",
    description: t`检查日期或数字列的值是否在指定范围内。`,
    example: "between( [" + t`Rating` + "], 3.75, 5 )",
    args: [
      { name: t`列`, description: t`要平均其值的列。` },
    ],
  },
  {
    name: "case",
    structure:
      "case(" +
      t`condition` +
      ", " +
      t`output` +
      ", " +
      t`condition` +
      ", " +
      t`output` +
      "…)",
    description: t`Tests a list of cases and returns the corresponding value of the first true case, with an optional default value if nothing else is met.`,
    example:
      "case( [" +
      t`Weight` +
      '] > 200, "' +
      t`Large` +
      '", [' +
      t`Weight` +
      '] > 150, "' +
      t`Medium` +
      '", "' +
      t`Small` +
      '" )',
    args: [
      {
        name: t`condition`,
        description: t`Something that should evaluate to true or false.`,
      },
      {
        name: t`output`,
        description: t`The value that will be returned if the preceeding condition is true.`,
      },
    ],
  },
  {
    name: "coalesce",
    structure: "coalesce(" + t`第一个值` + ", " + t`第二个值` + ", …)",
    // structure: "coalesce(" + t`value1` + ", " + t`value2` + ", …)",
    description: t`按顺序查看每个参数中的值，并为每行返回第一个非空值。`,
    // description: t`Looks at the values in each argument in order and returns the first non-null value for each row.`,
    example:
      "coalesce( [" +
      t`Comments` +
      "], [" +
      t`Notes` +
      '], "' +
      t`No comments` +
      '" )',
    args: [
      {
        name: t`第一个值`,
        // name: t`value1`,
        description: t`列或者值`,
        // description: t`A column or value.`,
      },
      {
        name: t`第二个值`,
        // name: t`value2`,
        // description: t`If value1 is empty, value2 gets returned if it's not empty, and so on.`,
        description: t`如果第一个值为空，则第二个值在不为空时返回，依此类推。`,
      },
    ],
  },
  {
    name: "concat",
    // structure: "concat(" + t`value1` + ", " + t`value2` + ", …)",
    structure: "concat(" + t`第一个值` + ", " + t`第二个值` + ", …)",
    description: t`将两个或多个文本字符串组合在一起。`,
    // description: t`Combines two or more strings of text together.`,
    example: "concat([" + t`Last Name` + '] , ", ", [' + t`First Name` + "])",
    args: [
      {
        name: t`第一个值`,
        // name: t`value1`,
        description: t`第二个值将会被添加到这个值后面`,
        // description: t`value2 will be added on to the end of this.`,
      },
      {
        name: t`第二个值`,
        // name: t`value2`,
        description: t`这个值将会被添加到第一个值后面`,
        // description: t`This will be added to the end of value1.`,
      },
    ],
  },
  {
    name: "contains",
    structure: "contains(" + t`字符串1` + ", " + t`字符串2` + ", …)",
    // structure: "contains(" + t`string1` + ", " + t`string2` + ", …)",
    description: t`检查字符串1是否包含字符串2。`,
    // description: t`Checks to see if string1 contains string2 within it.`,
    example: "contains([" + t`Status` + '] , "' + t`Pass` + '")',
    args: [
      {
        name: t`字符串1`,
        // name: t`string1`,
        description: t`将检查此字符串的内容。`,
        // description: t`The contents of this string will be checked.`,
      },
      {
        name: t`字符串`,
        // name: t`string2`,
        description: t`要查找的文本字符串。`,
      },
    ],
  },
  {
    name: "count",
    structure: "count",
    description: t`Returns the count of rows in the source data.`,
    example: "count",
  },
  {
    name: "countif",
    structure: "countif(" + t`condition` + ")",
    description: t`Only counts rows where the condition is true.`,
    example: "countif( [" + t`Subtotal` + "] > 100 )",
    args: [
      {
        name: t`condition`,
        description: t`Something that should evaluate to true or false.`,
      },
    ],
  },
  {
    name: "CumulativeCount",
    structure: "CumulativeCount",
    description: t`The additive total of rows across a breakout.`,
    example: "CumulativeCount",
  },
  {
    name: "CumulativeSum",
    structure: "CumulativeSum(" + t`column` + ")",
    description: t`The rolling sum of a column across a breakout.`,
    example: "CumulativeSum( [" + t`Subtotal` + "] )",
    args: [{ name: t`column`, description: t`The column to sum.` }],
  },
  {
    name: "distinct",
    structure: "distinct(" + t`column` + ")",
    description: t`The number of distinct values in this column.`,
    example: "distinct( [" + t`Last Name` + "] )",
    args: [
      {
        name: t`column`,
        description: t`The column whose distinct values to count.`,
      },
    ],
  },
  {
    name: "endsWith",
    structure: "endsWith(" + t`text` + ", " + t`comparison` + ")",
    description: t`Returns true if the end of the text matches the comparison text.`,
    example: "endsWith([" + t`Appetite` + '] , "' + t`hungry` + '" )',
    args: [
      {
        name: t`text`,
        description: t`A column or string of text to check.`,
      },
      {
        name: t`comparison`,
        description: t`The string of text that the original text should end with.`,
      },
    ],
  },
  {
    name: "regexextract",
    structure: "regexextract(" + t`text` + ", " + t`regular_expression` + ")",
    description: t`Extracts matching substrings according to a regular expression.`,
    example: "regexextract([" + t`Address` + '] , "[0-9]+")',
    args: [
      {
        name: t`text`,
        description: t`The column or string of text to search though.`,
      },
      {
        name: t`regular_expression`,
        description: t`The regular expression to match.`,
      },
    ],
  },
  {
    name: "lower",
    structure: "lower(" + t`文本` + ")",
    description: t`返回全部小写的文本字符串。`,
    example: "lower( [" + t`Status` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`要转换为小写值的列。`,
      },
    ],
  },
  {
    name: "ltrim",
    structure: "ltrim(" + t`文本` + ")",
    description: t`从文本字符串中删除前导空格.`,
    example: "ltrim( [" + t`Comment` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`您想要修饰值的那一列`,
      },
    ],
  },
  {
    name: "max",
    structure: "max(" + t`column` + ")",
    description: t`Returns the largest value found in the column.`,
    example: "max( [" + t`Age` + "] )",
    args: [
      {
        name: t`column`,
        description: t`The numeric column whose maximum you want to find.`,
      },
    ],
  },
  {
    name: "min",
    structure: "min(" + t`column` + ")",
    description: t`Returns the smallest value found in the column.`,
    example: "min( [" + t`Salary` + "] )",
    args: [
      {
        name: t`column`,
        description: t`The numeric column whose minimum you want to find.`,
      },
    ],
  },
  {
    name: "replace",
    structure:
      "replace(" +
      t`文本` +
      ", " +
      t`位置` +
      ", " +
      t`长度` +
      ", " +
      t`新闻本` +
      ")",
    description: t`将输入文本的一部分替换为新文本。`,
    example:
      "replace([" + t`Order ID` + "] , 8, 3, [" + t`Updated Part of ID` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`要被修饰的文本`,
      },
      {
        name: t`位置`,
        description: t`替换开始的位置。`,
      },
      {
        name: t`长度`,
        description: t`要替换的字符数。`,
      },
      {
        name: t`新闻本`,
        description: t`要在替换中使用的文本。`,
      },
    ],
  },
  {
    name: "rtrim",
    structure: "rtrim(" + t`文本` + ")",
    description: t`从文本字符串中删除尾部空白。`,
    example: "rtrim( [" + t`Comment` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`您想修饰值的那一列`,
      },
    ],
  },
  {
    name: "share",
    structure: "share(" + t`condition` + ")",
    description: t`Returns the percent of rows in the data that match the condition, as a decimal.`,
    example: "share( [" + t`Source` + '] = "Google" )',
    args: [
      {
        name: t`condition`,
        description: t`Something that should evaluate to true or false.`,
      },
    ],
  },
  {
    name: "startsWith",
    structure: "startsWith(" + t`text` + ", " + t`comparison` + ")",
    description: t`Returns true if the beginning of the text matches the comparison text.`,
    example:
      "startsWith([" + t`Course Name` + '] , "' + t`Computer Science` + '" )',
    args: [
      {
        name: t`text`,
        description: t`A column or string of text to check.`,
      },
      {
        name: t`comparison`,
        description: t`The string of text that the original text should start with.`,
      },
    ],
  },
  {
    name: "StandardDeviation",
    structure: "StandardDeviation(" + t`column` + ")",
    description: t`Calculates the standard deviation of the column.`,
    example: "StandardDeviation( [" + t`Population` + "] )",
    args: [{ name: t`column`, description: t`A numeric column.` }],
  },
  {
    name: "substring",
    structure:
      "substring(" + t`文本` + ", " + t`位置` + ", " + t`长度` + ")",
    description: t`返回所提供文本的一部分。`,
    example: "substring([" + t`Title` + "], 0, 10 )",
    args: [
      {
        name: t`文本`,
        description: t`返回部分的文本。`,
      },
      {
        name: t`位置`,
        description: t`开始复制字符的位置。`,
      },
      {
        name: t`长度`,
        description: t`要返回的字符数。`,
      },
    ],
  },
  {
    name: "sum",
    structure: "sum(" + t`column` + ")",
    description: t`Adds up all the values of the column.`,
    example: "sum( [" + t`Subtotal` + "] )",
    args: [{ name: t`column`, description: t`The numeric column to sum.` }],
  },
  {
    name: "sumif",
    structure: "sumif(" + t`column` + ", " + t`condition` + ")",
    description: t`Sums up values in a column where rows match the condition.`,
    example:
      "sumif( [" +
      t`Subtotal` +
      "], [" +
      t`Order Status` +
      '] = "' +
      t`Valid` +
      '" )',
    args: [
      {
        name: t`column`,
        description: t`The column to sum.`,
      },
      {
        name: t`condition`,
        description: t`Something that should evaluate to true or false.`,
      },
    ],
  },
  {
    name: "trim",
    structure: "trim(" + t`文本` + ")",
    description: t`从文本字符串中删除前导和尾部的空白。`,
    example: "trim( [" + t`Comment` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`您想要修饰的文本`,
      },
    ],
  },
  {
    name: "upper",
    structure: "upper(" + t`文本` + ")",
    description: t`返回全部大写的文本字符串。`,
    example: "upper( [" + t`Status` + "] )",
    args: [
      {
        name: t`文本`,
        description: t`要转换为大写的值的列。`,
      },
    ],
  },
];

export default name => helperTextStrings.find(h => h.name === name);
