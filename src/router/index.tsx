/*
 * @Author: growydp
 * @Date: 2023-10-27 12:01:27
 * @Description: 
 */
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import DiscoveringMusic from "../pages/DiscoveringMusic";
import Recommend from "../pages/DiscoveringMusic/Recommend";

import ErrorPage from '../pages/Error'
import SongSheet from "../pages/DiscoveringMusic/SongSheet";
import Homepage from '../pages/User/Homepage'
import Dynamics from "../pages/User/Dynamics";
import Follows from "../pages/User/Follows";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'discovering-music',
        element: <DiscoveringMusic />,
        children: [{
          path: 'recommend',
          element: <Recommend />
        },
        {
          path: 'song-sheet',
          element: <SongSheet />
        }]
      },
      {
        path: 'user',
        children: [{
          path: 'homepage',
          element: <Homepage />
        },
        {
          path: 'dynamics',
          element: <Dynamics />
        },
        {
          path: 'follows',
          element: <Follows />
        }]
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default router