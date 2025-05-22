import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Public/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
