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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ju7-0_0yWlACt1tNKDc003Rx1D4gN-wvww&usqp=CAU"
        />

        <div className="px-3 ml-2 pb-2 rounded-lg border border-gray-400 bg-gray-200 w-full hover:bg-gray-300 hover:scale-[1.02] transition">
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
                  className="pl-3 py-1 rounded-xl w-[95%]"
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
