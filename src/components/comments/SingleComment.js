import React, { useEffect, useRef, useState } from "react";

const SingleComment = ({
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
  comment,
}) => {
  const [input, setInput] = useState();
  const [showInput, setShowInput] = useState(false);
  const { name, text, replies } = comment;
  const [edit, setEdit] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

  const onAddComment = () => {
    if (edit) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      handleInsertNode(comment.id, input);
      setInput("");
      setShowInput(false);
    }

    if (edit) {
      setEdit(false);
    }
  };

  const deleteComment = () => {
    handleDeleteNode(comment.id);
  };

  const handleReply = () => {
    setShowInput(true);
    if (edit) {
      setEdit(!edit);
    }
  };

  return (
    <div className="shadow-sm py-2 rounded-lg my-2">
      <div className="flex">
        <img
          className="w-8 h-8 rounded-xl"
          alt="user"
          src="data:image/png;base64,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"
        />

        <div className="px-3 ml-3 pb-2 rounded-lg border border-gray-400 bg-gray-200 w-full hover:bg-gray-300 hover:scale-[1.02] transition">
          <p className="font-bold pl-2 pt-1 w-full"> {name} </p>
          <span
            className={`py-2 px-2 ${edit && "bg-white "} rounded-xl`}
            autoFocus
            contentEditable={edit}
            suppressContentEditableWarning={edit}
            ref={inputRef}
          >
            {comment.text}
          </span>
          {edit && (
            <div className=" mt-3 ">
              <button
                className="px-4 py-1 m-1 bg-blue-500 rounded-full text-white hover:bg-blue-800 duration-200"
                onClick={onAddComment}
              >
                Save
              </button>
              <button
                className="px-4 py-1 m-1 bg-blue-500 rounded-full text-white hover:bg-blue-800 duration-200"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.innerText = comment.text;
                    setEdit(false);
                  }
                }}
              >
                Cancel
              </button>
            </div>
          )}

          {showInput ? (
            <>
              <form className="mt-1">
                <input
                  className="pl-3 py-2 rounded-xl w-1/3"
                  type="text"
                  placeholder="Type..."
                  autoFocus
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="pt-2">
                  {input ? (
                    <>
                      <button
                        className={
                          "px-4 py-1 m-1 bg-blue-500 text-white hover:bg-blue-800 duration-200  rounded-full"
                        }
                        onClick={onAddComment}
                      >
                        Comment
                      </button>
                      <button
                        className="px-4 py-1 m-1 bg-blue-500 rounded-full text-white hover:bg-blue-800 duration-200"
                        onClick={() => setShowInput(false)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <div className="flex">
                      <h1
                        className={`px-4 py-1 m-1 bg-gray-400 w-24 text-gray-700 cursor-none rounded-full`}
                      >
                        Comment
                      </h1>
                      <button
                        className="px-4 py-1 m-1 bg-blue-500 rounded-full text-white hover:bg-blue-800 duration-200"
                        onClick={() => setShowInput(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="mt-1">
              <button
                className="px-4 py-1 m-1 bg-blue-400 rounded-full hover:bg-blue-800 duration-200"
                onClick={handleReply}
              >
                Reply
              </button>
              <button
                className="px-4 py-1 m-1 bg-blue-400 rounded-full  hover:bg-blue-800 duration-200"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </button>
              <button
                className="px-4 py-1 m-1 bg-blue-400 rounded-full  hover:bg-blue-800 duration-200"
                onClick={deleteComment}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
