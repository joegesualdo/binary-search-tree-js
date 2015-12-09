var BST = (function(node){
  var root = node || null

  function insertNode(nodeToInsert, node){
    if(typeof node == 'undefined'){
      node = root
    } 
    if(node == null){
      return
    } else {
      if(nodeToInsert.value > node.value && node.right == null){
        node.right = nodeToInsert
        return
      } else if(nodeToInsert.value <= node.value && node.left == null){
        node.left = nodeToInsert
        return
      } else if(nodeToInsert.value > node.value && node.right != null){
        insertNode(nodeToInsert, node.right)
      } else if(nodeToInsert.value <= node.value && node.left != null){
        insertNode(nodeToInsert, node.left)
      }
    }
  }

  // http://stackoverflow.com/a/33112271/1418590
  function kthSmallestNode(k, node){
    if(typeof node == 'undefined'){
      node = root
    }
    if(node == null || k < 0){
      return k
    }
    k = kthSmallestNode(k, node.left)
    k--
    if(k == 0){
      console.log(node)
      return k
    }
    k = kthSmallestNode(k, node.right)
    return k
  }

  function inorderTraversal(node, fn){
    if(typeof node == 'undefined'){
      node = root
    }
    if(node == null){
      return
    }
    inorderTraversal(node.left, fn)
    fn(node)
    inorderTraversal(node.right, fn)
  }

  // http://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/
  function lowestCommonAncestor(n1, n2, node){
    if(typeof node == 'undefined'){
      node = root
    }
    if(node == null){
      return
    }
    if(n1 < node.value && n2 < node.value){
      return lowestCommonAncestor(n1, n2, node.left)
    }
    if(n1 > node.value && n2 > node.value){
      return lowestCommonAncestor(n1, n2, node.right)
    }
    return node 
  }

  return {
    kthSmallest: kthSmallestNode,
    insert: insertNode,
    root: root,
    inorder: inorderTraversal,
    lca: lowestCommonAncestor
  }
})

module.exports = BST
