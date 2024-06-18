import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/Todo'
import { useSelector } from 'react-redux'
const App = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div className=" min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-5xl font-bold text-center mb-8 mt-[-60px] w-[1100px] ml-[-240px]">TodoList - ReduxToolkit - LocalStorage - ReactJS</h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id}
              className='w-full'
            >
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
      <h1 className='text-white text-[24px] border-[3px] border-white border-dashed w-[350px] h-[50px] rounded-[10px] font-bold mx-auto fixed justify-center items-center flex inset-0 mt-[630px] ml-[1150px]'>&copy;	Tạo Bởi: <a href='https://github.com/hvtienprotv84'><span className='text-[#38bdf8] ml-[5px]'> Huỳnh Vĩnh Tiến</span></a></h1>
    </div>
  )
}

export default App