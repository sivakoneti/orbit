import * as t from "@babel/types";
import type { Rule } from "eslint";

export const ERROR =
  "Do not use theme.rtl conditions. Import RTL utility functions from Orbit and use them instead";

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Prevents bad RTL patterns",
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
              node.quasi.expressions.forEach(e => {
                if (t.isArrowFunctionExpression(e)) {
                  if (t.isConditionalExpression(e.body)) {
                    const { consequent, alternate } = e.body;
                    if (t.isLiteral(consequent) && t.isLiteral(alternate)) {
                      const regex = new RegExp(
                        /left|right|margin-left|margin-right|padding-left|padding-right/g,
                      );

                      if (
                        // @ts-expect-error babel-types
                        consequent.value.match(regex) &&
                        // @ts-expect-error babel-types
                        alternate.value.match(regex)
                      ) {
                        context.report({
                          // @ts-expect-error TODO
                          node,
                          message: ERROR,
                        });
                      }
                    }
                  }
                }
              });
            }
          }
        }
      },
    };
  },
};
