/**
 * Execute and return interestIds given the passed ast
 *
 * @param {DslNode} ast - The root ast to execute
 * @param {DslNode.id[]} interestIds - List of interested ids
 * @returns {Object<DslNode.id, *>} - Result map of id -> value
 */
import { NodeShape } from './dsl';

function nodeValue(ast, bindings) {
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

/**
 * Takes a astNode and prints its childrens ids, then it's id
 */
function printDepthFirstPost(ast) {
	switch (ast.shape) {
	case NodeShape.Block:
			// traverse the children first
			// the children of a block are it's `nodes`
		for (let i = 0; i < ast.nodes.length; i++) {
			const child = ast.nodes[i];
			// print out the child id (but if it has children you need to print its children's id first, (but if it has children you need to print its children's id first, ...))
			// one way to do the above is a recursive function call (fyi the other way is to use a stack, don't do it here)
			// https://medium.com/basecs/demystifying-depth-first-search-a7c14cccf056
			if (child === null) {
				return;
			}
			printDepthFirstPost(child.left);
			printDepthFirstPost(child.right);
			console.log(child.data);
		}

		// in post traversal we print the node after we print the children let not forget
		console.log(ast.id);
		break;
	default:
			// we didn't write the code for this shape yet so just print the id
		console.log("haven't written code for shape yet: ", ast.shape);
		console.log(ast.id);
		break;
	}
}

export const run = (ast, interestIds) => {
	printDepthFirstPost(ast);
	// const answer = {};
	// const node = nodeValue(ast.node, ast.bindings);
	// if (interestIds.includes(ast.id)) {
	// 	answer[ast.id] = node;
	// }
};
