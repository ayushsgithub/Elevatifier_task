const Header = () => {
  return (
    <header className="flex items-center justify-center space-x-2 font-bold px-10 pt-4">
      <div className="flex items-center space-x-2">
        <a href="/">
          <img
            className=" w-44"
            src={"Elevatifiermain.png"}
            alt="logo"
          />
        </a>
        {/* <h1>Elevatifier Task</h1> */}
      </div>
    </header>
  );
};

export default Header;
