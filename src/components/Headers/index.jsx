import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Star from "../svg/Star";


export default function HeaderOne({ className, drawerAction, type = 1 }) {
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar
        type={type}
        className="quomodo-shop-middle-bar lg:block hidden"
      />
      <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="w-full h-full flex justify-between items-center px-5">
          <div onClick={drawerAction}>
            <Star/>
          </div>
          <div>
            {type === 3 ? (
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/src/assets/icons/logo-3.svg`}
                  alt="logo"
                />
            ) : type === 4 ? (
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/src/assets/icons/logo-4.svg`}
                  alt="logo"
                />
            ) : (
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/src/assets/icons/logo.svg`}
                  alt="logo"
                />
            )}
          </div>
          <div className="cart relative cursor-pointer">
              <span>
                <Star />
              </span>
            <span
              className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                type === 3 ? "bg-qh3-blue text-white" : "bg-qyellow text-qblack"
              }`}
            >
              15
            </span>
          </div>
        </div>
      </div>
      <Navbar type={type} className="quomodo-shop-nav-bar lg:block hidden" />
    </header>
  );
}
