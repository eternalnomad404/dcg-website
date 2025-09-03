import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Homepage from "./Pages/Public/HomePage/HomePage";
import Projects from "./Pages/Public/Projects/Projects";
// import Blog from "./Pages/Public/Blog/Blog";
import Resources from "./Pages/Public/Resources/Resources";
import Events from "./Pages/Public/Events/Events";
import Login from "./Pages/Public/Login/Login";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
   {
    path: "/projects",
    element: <Projects />,
  },
  //  {
  //   path: "/blogs",
  //   element: <Blog />,
  // },
  {
    path: "/resources",
    element: <Resources />,
  },
    {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
