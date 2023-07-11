import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import Contact from "./Pages/contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import Offerings from "./Pages/offering/Offerings";
import Profile from "./Pages/Profile/Profile";
import Raisefunds from "./Pages/raise-funds/Raisefunds";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import SingleProblem from "./Pages/offering/SingleProblem";
import Invest from "./Pages/Invest/Invest";
import { ToastContainer } from "react-toastify";
import SendEmail from "./Pages/auth/Signup/sendemail";
import Emailverification from "./Pages/auth/Signup/emailverification";
import DonateToOffering from "./Pages/offering/Donate";
import AdminSignInPage from "./Pages/admin/Signin";
import AdminProfile from "./Pages/admin/Profile";
import ViewProblemDetail from "./Pages/admin/ViewProblemDetail";

function App() {
  return (
    <div className="App ">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<AdminSignInPage />} />
        <Route exact path="/admin-dashboard" element={<AdminProfile />} />
        <Route
          exact
          path="/admin-dashboard/:id"
          element={<ViewProblemDetail />}
        />
        {/* <Route exact path="/raise-funds" element={<Raisefunds />} /> */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/problems" element={<Offerings />} />
        <Route exact path="/problems/:name" element={<SingleProblem />} />

        <Route exact path="/profile" element={<UpdateProfile />} />
        <Route exact path="/profile/update" element={<UpdateProfile />} />
        <Route exact path="/auth/signin" element={<Signin />} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route exact path="/auth/signup/sendemail" element={<SendEmail />} />
        <Route
          exact
          path="/auth/signup/emailverification"
          element={<Emailverification />}
        />
      </Routes>
    </div>
  );
}

export default App;
