## Binary Search Tree 
> Binary Search Tree 

## Install
```
$ npm install --save binary-search-tree-js 
```

## Usage 
```
var Node = require("tree-node-js")
var BST = require("binary-search-tree-js")

var node1 = Node(22)
var tree = BST(node1)

var node1 = Node(10)
var node2 = Node(2)
tree.insert(node1)
tree.insert(node2)

tree.inorder(node1, function(node){
  console.log(node)
})

```

## API

### Initialize

### `BST(rootNode)`

| Name | Type | Description |
|------|------|-------------|
| rootNode | `Node` | A node we want to assign as the root node 

Returns: `BST` instance

```javascript
var Node = require("tree-node-js")
var BST = require("binary-search-tree-js")

var node1 = Node(22)
var tree = BST(node1)
```

### Instance Methods 

### `insert(node)`

| Name | Type | Description |
|------|------|-------------|
| node | `Node` | A node we want to insert into the BST 

Returns: `undefined`, that was inserted 

```javascript
var Node = require("tree-node-js")
var BST = require("binary-search-tree-js")

var node1 = Node(22)
var tree = BST(node1)

var node1 = Node(10)
var node2 = Node(2)
tree.insert(node1)
tree.insert(node2)
```

### `kthSmallest(k)`

| Name | Type | Description |
|------|------|-------------|
| k | `Number` | Represent the Kth element you want 

Returns: `Node`, that represents the node that is the k smallest 

```javascript
var Node = require("tree-node-js")
var BST = require("binary-search-tree-js")

var node1 = Node(22)
var tree = BST(node1)
var node1 = Node(10)
var node2 = Node(2)
tree.insert(node1)
tree.insert(node2)

console.log(tree.kthSmallest(2)) // {value: 10, ....}
```

### `lca(n1, n2)`

| Name | Type | Description |
|------|------|-------------|
| n1 & n2| `Number` | Nubmers representing the data values of the nodes that you want to find the common ancestor for.

Returns: `Node`, that represents the node that is the lowest common ancestor 

```javascript
var Node = require("tree-node-js")
var BST = require("binary-search-tree-js")

var node1 = Node(22)
var tree = BST(node1)
var node1 = Node(10)
var node2 = Node(2)
tree.insert(node1)
tree.insert(node2)

console.log(tree.lca(2, 10)) // {value: 10, ....}
```
