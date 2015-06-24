export default function ({ Plugin, types: t }) {
  return new Plugin("array-includes", {
    metadata: {
      group: "builtin-post"
    },

    visitor: {
      CallExpression: function (node, parent, scope, file) {
        var callee = this.get('callee');
        if (callee.node.property && callee.node.property.name === 'includes') {
          callee.node.property.name = 'indexOf';

          return t.logicalExpression(">=", node, t.literal(0));
        }
      }
    }
  });
}
