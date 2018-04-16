```scala
type Id = String

trait Value

trait DslNode {
	def id: Int
}

case class Literal(
	value: Value,
	id: Id,
) extends DslNode

case class Identifier(
	name: String,
	id: Id,
) extends DslNode

case class Assignment(
	name: String,
	value: DslNode,
	id: Id,
extends DslNode

case class Function(
	callee: DslNode,
	args: Seq[DslNode],
	id: Id,
extends DslNode

case class Block(
	bindings: Map[String, Value],
	nodes: Seq[DslNode],
	id: Id,
) extends DslNode

def run(
	ast: Block,
	ids: Seq[Id],
): Map[Id, Value]
```
