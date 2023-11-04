import { Provider } from "react-redux";
import Body from "./components/Common/Body";
import store from "./utils/reduxStore/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/Home/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import WatchLetter from "./components/pages/WatchLetter";
import WatchHistroy from "./components/pages/WatchHistroy";
import Subscribe from "./components/pages/Subscribe";
import LikedVideos from "./components/pages/LikedVideos";
import ShowSearchResults from "./components/Search/ShowSearchResults";
import Error from "./components/Common/Error";
import ButtonVideoCard from "./components/HeaderButton/ButtonVideoCard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
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
      {
        path: "/fiter-button",
        element: <ButtonVideoCard />,
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
