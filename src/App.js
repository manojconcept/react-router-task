import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/pages/All";
import DataScience from "./components/pages/DataScience";
import FullStack from "./components/pages/FullStack";
import CyberSecurity from "./components/pages/CyberSecurity";
import Career from "./components/pages/Career";
import "./components/Header.css"

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={All} />
        <Route path="/FullStackDev" Component={FullStack} />
        <Route path="/DataScience" Component={DataScience} />
        <Route path="/CyberSecurity" Component={CyberSecurity} />
        <Route path="/Career" Component={Career} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;