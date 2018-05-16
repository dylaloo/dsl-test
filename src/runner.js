/**
 * Execute and return interestIds given the passed ast
 *
 * @param {DslNode} ast - The root ast to execute
 * @param {DslNode.id[]} interestIds - List of interested ids
 * @returns {Object<DslNode.id, *>} - Result map of id -> value
 */
import { NodeShape } from './dsl';

function  nodeValue(ast, bindings) {
	switch (ast.shape) {
	case NodeShape.Array:
		const newArray = [];
		for (let i = 0; i < ast.length; i++) {
			if ((ast.args[i], ast.id) !== null) {
				newArray.push(ast.name);
			}
		}
		return ast.args;
	case NodeShape.Assignment:
		// bindings[ast.name] = bindings[ast.value];
		bindings[ast.name] = new bindings[ast.value];
		// bindings[ast.name] = (ast.value, bindings);
		return bindings[ast.name];
		break;
	case NodeShape.Block:
			//
		break;
	case NodeShape.Function:
		for (let i = 0; i < ast.length; i++) {
			if ((ast.args[i], ast.id) !== null) {
				return [ast.callee, ast.args];
			}
		}
		break;
	case NodeShape.Identifier:
		return bindings[ast.name];
	case NodeShape.Literal:
		return ast.value;
	}
}
export const run = (ast, interestIds) => {
	console.debug('@todo: optimize and execute', { ast, interestIds });
	// return {
		// @todo: fill this object with interestId -> value
	// };
	const answer = {};
	const node = nodeValue(ast.node, ast.bindings);
	if (interestIds.includes(ast.id)) {
		answer[ast.id] = node;
	}
};
