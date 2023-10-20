const useNode = () => {
  // Insert New Comment
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      tree.replies.unshift({
        id: new Date().getTime(),
        name: "User",
        text: item,
        replies: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.replies.map((ob) => {
      return insertNode(ob, commentId, item);
    });

    return { ...tree, replies: latestNode };
  };

  //  Edit Comment
  const editNode = (tree, commentId, value) => {
    if (tree.id === commentId) {
      tree.text = value;
      return tree;
    }

    tree.replies.map((ob) => {
      return editNode(ob, commentId, value);
    });

    return { ...tree };
  };

  // Delete Comment
  const deleteNode = (tree, id) => {
    for (let i = 0; i < tree.replies.length; i++) {
      const currentItem = tree.replies[i];
      if (currentItem.id === id) {
        tree.replies.splice(i, 1);
        return tree;
      } else {
        deleteNode(currentItem, id);
      }
    }
    return tree;
  };

  return { insertNode, editNode, deleteNode };
};

export default useNode;
