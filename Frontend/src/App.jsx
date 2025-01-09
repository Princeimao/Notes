import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./auth/forms/SignUpForm";
import SignInForm from "./auth/forms/SignInForm";
import AuthLayout from "./auth/AuthLayout";
import Home from "./root/pages/Home";
import Layout from "./root/Layout";
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
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </Router>
    </main>
  );
}

export default App;
