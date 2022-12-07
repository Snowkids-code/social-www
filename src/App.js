import { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LeftBar from "./components/layout/LeftBar";
import Navbar from "./components/layout/Navbar";
import RightBar from "./components/layout/RightBar";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

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
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
      errorElement: <Login /> ,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
