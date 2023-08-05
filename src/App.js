import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Message2 from "./components/Message2";
import Splash from "./components/Splash";
import Onboarding from "./components/Onboarding";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Message from "./components/Message";
import Message1 from "./components/Message1";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigation />} />
        <Route exact path="/splash" element={<Splash />} />
        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/message1" element={<Message1 />} />
        <Route exact path="/message2" element={<Message2 />} />
      </Routes>
    </Router>
  );
}

export default App;
