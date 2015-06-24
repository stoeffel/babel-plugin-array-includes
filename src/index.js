export default function ({ Plugin, types: t }) {
  return new Plugin("array-includes", {
    metadata: {
      group: "builtin-post"
    },

    visitor: {
      CallExpression: function (node, parent, scope, file) {
        var callee = this.get('callee');

        if (callee.isMemberExpression({ computed: false }) &&
            callee.get("property").isIdentifier({ name: "includes" }) &&
            callee.get("object").isGenericType("Array")) {

          callee.node.property.name = 'indexOf';

          return t.logicalExpression(">=", node, t.literal(0));
        }
      }
    }
  });
}
