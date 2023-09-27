import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage";
import SearchPage from "./component/SearchPage";
import CampsPage from "./component/CampsPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage />
        </div>
      ),
    },
    {
      path: "/SearchPage",
      element: <SearchPage/>
    },
    {
      path: "/CampsPage",
      element: <CampsPage/>
    }

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
