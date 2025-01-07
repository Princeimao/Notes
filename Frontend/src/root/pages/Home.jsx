// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Notes from "../../components/shared/Notes";

const Home = () => {
  // const authenticated = useSelector((state) => state.isAuthenticated);
  // const navigate = useNavigate();

  return (
    <div className="px-20 py-10 w-full min-h-screen bg-primary-100 text-white font-[ubuntu]">
      <div className=" w-full h-[100%]">
        <h1 className="text-4xl">
          Hello, <b>Ruy!</b> 👋🏼
        </h1>
        <p className="text-grey mt-2 mb-8 text-md">
          All your notes are here, in one place!
        </p>
        <div className="grid grid-cols-4 gap-3">
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default Home;
