import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ErrorPage from './error-page';
import Filterthree from './productPage/Filterthree';
import ProductListingPage from './productPage/ProductListingPage';
import Modal from './UI/Modal';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {path:"/",
  element:<Root/>,
  errorElement:<ErrorPage/>,
},
{
  path:"orderOnline",
  element:<ProductListingPage/>,
  children:[{
    path:"delivery",
    element:<Filterthree/>,
    children:[{
      path:"filter",
      element:<Modal></Modal>
    }]
  },{},{}]
},
{
  path:"dinning",
  element:<ProductListingPage/>
},
{
  path:"nightlifeAndClubs",
  element:<ProductListingPage/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>,
)
