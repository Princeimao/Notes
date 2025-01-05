import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from "./auth/forms/SignUpForm";
import SignInForm from "./auth/forms/SignInForm";
import AuthLayout from "./auth/AuthLayout";
import Home from "./root/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/*Public Routes*/}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
