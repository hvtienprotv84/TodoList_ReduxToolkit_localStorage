import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setinput] = useState("")
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if(input){

      dispatch(addTodo(input));
    }
    setinput("");
  }
  return (
    <div>
      <form onSubmit={addTodoHandler} className=" flex">
        <input
          type="text"
          // className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 text-black bg-white py-1.5 placeholder:text-black text-[25px]"
          placeholder="Nhập Một Công Việc"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        {/* <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"        >
          Thêm Công Việc
        </button> */}
        <button type="submit" className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 w-[200px] font-medium overflow-hidden relative px-4 py-2 rounded-r-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-[450px] h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Thêm Công Việc
        </button>
      </form>
    </div>
  )
}

export default AddTodo;