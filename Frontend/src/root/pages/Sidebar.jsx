const Sidebar = () => {
  return (
    <>
      {/* For Full screen */}
      <div className="bg-primary-200 h-screen w-[9.3vh] shadow-[10px_0px_15px_rgba(0,0,0,0.15)] py-8 hidden sm:flex flex-col justify-between items-center">
        <div className="w-8 h-8 object-cover">
          <img src="/Logo.png" alt="" />
        </div>

        <div>
          <img className="w-7 mb-6" src="/home.png" alt="" />
          <img className="w-7" src="/Reanking.png" alt="" />
        </div>

        <div>
          <img className="w-7" src="/Logout.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
