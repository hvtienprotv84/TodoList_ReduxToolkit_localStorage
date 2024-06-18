import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted, updateTodo } from '../features/todo/todoSlice';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.text)
  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(updateTodo({
      id: todo.id,
      text: todoMsg
    }))
    setIsTodoEditable(false)
  }


  return (
    <div className={`flex border-[3px] border-white border-dashed rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#38bdf8]" : "bg-[#ff2bff]"}`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch(toggleCompleted(todo.id))}
      />
      <input
        type="text"
        className={`border-[3px] outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-white border-dashed px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);

        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
