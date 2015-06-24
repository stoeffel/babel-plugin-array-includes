export default function ({ Plugin, types: t }) {
  return new Plugin("array-includes", {
    metadata: {
      group: "builtin-post"
    },

    visitor: {
      CallExpression: function (node, parent, scope, file) {
        var prop = node.property;
        if (this.get("callee").getSource().indexOf("includes") >= 0) {
          return '(' + this.getSource().replace('includes', 'indexOf') + ' >= 0)';
        }
      }
    }
  });
}
