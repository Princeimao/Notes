import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./auth/forms/SignUpForm";
import SignInForm from "./auth/forms/SignInForm";
import AuthLayout from "./auth/AuthLayout";
import Home from "./root/pages/Home";
import Layout from "./root/Layout";
import Upcoming from "./root/pages/Upcoming";
import Today from "./root/pages/Today";
import Calander from "./root/pages/Calander";
//import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/*Public Routes*/}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Route>
          {/* Private Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/Today" element={<Today />} />
            <Route path="/calander" element={<Calander />} />
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </Router>
    </main>
  );
}

export default App;
