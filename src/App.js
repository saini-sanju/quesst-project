import "./App.css";
import MyNavbar from "./Components/Nabvar/Navbar";
import LeftSaid from "./Components/leftComponent/leftSaidbar";
import Middle from "./Components/middleComponent/middleComponent";
import RightComponent from "./Components/rightComponent/rightComponent";
// import Skeletons from "./Components/middleComponent/skeletons/skeletons";
function App() {
  return (
    <div>
      <MyNavbar />
      <div className="container container-fluid" style={{marginTop: "5rem"}}>
        <div className="row">
          <div className="col-lg-3  col-md-4 d-none d-md-block">
            <LeftSaid />
          </div>
          <div className="col-lg-6 col-md-8">
            <Middle />
            {/* <Skeletons /> */}
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <RightComponent />
          </div>
          <div className="col-lg-3 col-md-4 d-none d-md-block d-lg-none" style={{marginTop: "-21.5rem", marginLeft: "15px"}}>
            <RightComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
