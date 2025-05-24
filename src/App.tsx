import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Public/HomePage/HomePage";
import Projects from "./Pages/Public/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
   {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
