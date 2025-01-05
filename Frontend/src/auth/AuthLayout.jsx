import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const authenticated = useSelector((state) => state.isAuthenticated);
  const navigate = useNavigate();

  return (
    <>
      {authenticated ? (
        navigate("/")
      ) : (
        <div className="bg-primary-100 flex justify-center items-center h-screen ">
          <div className="w-1/2 hidden lg:flex flex-col justify-center items-center">
            <img className="w-[50vh]" src="/Login_Page_Img_White.png" alt="" />
            <div className="w-[50vh]">
              <h1 className="text-4xl text-start font-bold font-[ubuntu] mt-6 text-white">
                Keep Life Simple
              </h1>
              <p className="text-grey text-lg w-[47vh] mt-4">
                Store all your notes in a simple and intuitive app that helps
                you enjoy what is most important in life.
              </p>
            </div>
          </div>

          <div className="w-1/2 h-screen">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
