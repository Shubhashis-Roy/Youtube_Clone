import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/reduxStore/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import WatchLetter from "./pages/WatchLetter";
import LinkedVideoes from "./pages/LinkedVideoes";
import WatchHistroy from "./pages/WatchHistroy";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/watch-letter",
        element: <WatchLetter />,
      },
      {
        path: "/liked-video",
        element: <LinkedVideoes />,
      },
      {
        path: "/watch-history",
        element: <WatchHistroy />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
