import React, { useState } from "react";
import { commentsData } from "./mockData";
import useNode from "../../hooks/useNode";
import SingleComment from "./SingleComment";

const CommentsList = ({
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
  comments,
}) => {
  const [showComments, setShowComments] = useState(false);

  const handleClicked = () => {
    setShowComments(!showComments);
  };

  return comments?.replies?.map((comment) => (
    <div key={comment.replies.id}>
      <SingleComment
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        comment={comment}
      />
      {comment.replies.length >= 1 && (
        <>
          <div
            className="cursor-pointer ml-16 px-9 py-1 rounded-lg flex bg-blue-700 w-56 text-white"
            onClick={handleClicked}
          >
            {showComments ? "🔼" : "🔽"}
            <h1 className="ml-2"> Views {comment.replies.length} Replies </h1>
          </div>
        </>
      )}
      {showComments && (
        <div className="pl-5  ml-6">
          <CommentsList
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleEditNode={handleEditNode}
            comments={comment}
          />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  const [comments, setComments] = useState(commentsData);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setComments(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setComments(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setComments(temp);
  };

  return (
    <div className="mt-6 py-2 pr-6">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList
        key={commentsData.id}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        comments={comments}
      />
    </div>
  );
};

export default CommentsContainer;
