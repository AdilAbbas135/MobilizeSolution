import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import Contact from "./Pages/contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Offerings from "./Pages/offering/Offerings";
import Profile from "./Pages/Profile/Profile";
import Update_Profile from "./Pages/Profile/Update_Profile";
import Raisefunds from "./Pages/raise-funds/Raisefunds";
import Organization from "./Pages/Organizations/Organization";
import SingleOrganization from "./Pages/Organizations/SingleOrganization";
import SingleOffering from "./Pages/offering/SingleOffering";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/raise-funds" element={<Raisefunds />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/offerings" element={<Offerings />} />
        <Route exact path="/offerings/:name" element={<SingleOffering />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/update" element={<Update_Profile />} />
        <Route exact path="/auth/signin" element={<Signin />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route exact path={"/organizations"} element={<Organization />} />
        <Route
          exact
          path="/organizations/:name"
          element={<SingleOrganization />}
        />
      </Routes>
    </div>
  );
}

export default App;
