
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Home/>
  },
  {
    path : "/singup",
    element : <SignUp/>
  },
  {
    path : "/login",
    element : <Login/>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
