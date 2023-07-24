import App from "../App";
import { Outlet } from "react-router";
const Root = () => {
  return (
    <>
      <App/>
      <Outlet/>
    </>
  )
}

export default Root;
