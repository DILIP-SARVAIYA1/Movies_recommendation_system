import { Provider, useDispatch } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Components/Browse";
import LogIn from "./Components/LogIn";
import Watch from "./Components/Watch";

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
        element: <LogIn />, //LOGIN PAGE
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

export default App;
