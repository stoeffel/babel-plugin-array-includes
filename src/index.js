export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        
        const callee = path.node.callee;

        if (t.isMemberExpression(callee, { computed: false }) &&
            t.isIdentifier(callee.property, { name: "includes" })) {

          callee.property.name = 'indexOf';

          path.replaceWith(
            t.binaryExpression("!==", path.node, t.numericLiteral(-1))
          );

        }
      }
    }
  };
}
