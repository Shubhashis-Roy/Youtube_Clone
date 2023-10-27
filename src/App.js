import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/reduxStore/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import WatchLetter from "./pages/WatchLetter";
import WatchHistroy from "./pages/WatchHistroy";
import Subscribe from "./pages/Subscribe";
import LikedVideos from "./pages/LikedVideos";
import ShowSearchResults from "./pages/ShowSearchResults";

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
        element: <LikedVideos />,
      },
      {
        path: "/watch-history",
        element: <WatchHistroy />,
      },
      {
        path: "/subscribes",
        element: <Subscribe />,
      },
      {
        path: "/search-results",
        element: <ShowSearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
