import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Public/HomePage/HomePage";
import Projects from "./Pages/Public/Projects/Projects";
import Blog from "./Pages/Public/Blog/Blog";
import Resources from "./Pages/Public/Resources/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
   {
    path: "/projects",
    element: <Projects />,
  },
   {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
