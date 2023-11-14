import "./App.css";
import Attendance from "./components/Attendance";
import BehavAnalytics from "./components/BehavAnalytics";
import Homeworks from "./components/Homeworks";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import data from "./data (1).json";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <Navbar id="page-wrap" />
      <div className="container-fluid border">
        <Attendance data={data} />
        {/* {console.log(Object.keys(data[Object.keys(data)[1]]))}
      {console.log("--->", Object.values(data))}
  {console.log(Object.entries(data) + "asdasd")}*/}
        {console.log(data)}
        <div className="row mt-3">
          <div className="col-sm-4">
            {" "}
            <Homeworks data={data} />
          </div>
          <div className="col-sm-8">
            {" "}
            <BehavAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
