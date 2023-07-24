import { useRouteError } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
const ErrorPage = () => { 
    const error = useRouteError()
    console.log(error)
     return (
  <>
  <div className="container-fluid d-flex justify-content-center align-items-center" style="height: 100vh;">
  <div className="text-center">
    <h1 className="display-1">{error.statusText || error.message}</h1>
    <h3>Page Not Found</h3>
    <p className="lead">Oops! The page you are looking for could not be found.</p>
  </div>
</div>
  </>
  )
}

export default ErrorPage
