import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom"

import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { AuthContext } from "./context/authContext"

function App() {
  const {currentUser} = useContext(AuthContext)

  const {darkMode} = useContext(DarkModeContext)

  function Layout() {
    return (
      <div className={`theme-${darkMode ? "dark":"light"}`}>
        <Navbar />
        <div className="main-app-layout display-flex">
          <LeftBar />
          <div style={{flex:6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  function ProtectedRoute({ children }) {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])

  return (
    <>
      {/* <Login/> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
