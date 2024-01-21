import { Provider, useDispatch } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Components/Browse";
import LogIn from "./Components/LogIn";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

export default App;
