import * as t from "@babel/types";
import type { Rule } from "eslint";

const LIMIT = 5;
export const ERROR =
  "You are using too many arrow function expressions. You can desctructure all props in single function and pass it down via css helper function";

export default {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Counts usage of arrow function expressions inside SC. If there are too many - suggests to destructure all props in single function and pass it down via css helper function",
      category: "Possible Errors",
      recommended: true,
    },
  },

  create: (context: Rule.RuleContext) => {
    let specifier = "";

    return {
      ImportDeclaration(node: t.ImportDeclaration) {
        if (node.source.value === "styled-components") {
          const def = node.specifiers.filter(s => t.isImportDefaultSpecifier(s));
          specifier = def[0].local.name;
        }
      },

      TaggedTemplateExpression(node: t.TaggedTemplateExpression) {
        if (t.isMemberExpression(node.tag)) {
          if (t.isIdentifier(node.tag.object) && node.tag.object.name === specifier) {
            if (t.isTemplateLiteral(node.quasi)) {
              const count = node.quasi.expressions.filter(e => t.isArrowFunctionExpression(e))
                .length;
              if (count >= LIMIT) {
                context.report({
                  // @ts-expect-error TODO
                  node,
                  message: ERROR,
                });
              }
            }
          }
        }
      },
    };
  },
};
