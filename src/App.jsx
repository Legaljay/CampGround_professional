import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./component/HomePage";
import SearchPage from "./component/SearchPage";
import CampsPage from "./component/CampsPage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <HomePage />
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "/SearchPage",
  //     element: <SearchPage/>
  //   },
  //   {
  //     path: "/CampsPage",
  //     element: <CampsPage/>
  //   }

  // ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/searchpage" element={<SearchPage />}></Route>
        <Route path="/searchpage/:id" element={<CampsPage />}></Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
