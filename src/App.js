import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import UserForm from "./Component.js/UserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchfiter from "./Component.js/Searchfilter/Searchfiter";
import MyComponent from "./Component.js/Searchfilter/Mycomponent";

function App() {
  return (
    <div className="">
      <ToastContainer />

      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card p-3">
            {/* <UserForm /> */}
            {/* Serchfilter  */}
            {/* <Searchfiter /> */}
            <MyComponent />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
