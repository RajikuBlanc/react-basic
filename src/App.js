import logo from "./logo.svg";
import "./App.css";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import Basicuseeffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Basic1 name="Hooks" /> */}
        {/* <Basic2 /> */}
        {/* <Basicuseeffect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
