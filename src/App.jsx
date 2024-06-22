import './App.css'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

function App() {
  
  return (
    <Provider store={store}>
      <div className='bg-slate-400 p-20 rounded-xl'>
      <h1 className='font-bold font-serif text-black'>Manage Your Todos</h1>
      <AddTodo />
      <Todos />
      </div>
    </Provider>
  )
}

export default App