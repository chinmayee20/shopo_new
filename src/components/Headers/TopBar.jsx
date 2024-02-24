import Selectbox from "../Selectbox";
import Star from "../svg/Star";

export default function TopBar({ className }) {
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                </li>
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                </li>
                <li>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6">
                <div className="country-select flex space-x-1 items-center">
                  <div>
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/country-logo-16x16.png`}
                      width="16"
                      height="16"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                  <Selectbox
                    className="w-fit"
                    datas={["United State", "Bangladesh", "India"]}
                  />
                  <div>
                    <Star/>
                  </div>
                </div>
                <div className="currency-select flex space-x-1 items-center">
                  <Selectbox className="w-fit" datas={["USD", "BDT"]} />
                  <Star/>
                </div>
                <div className="language-select flex space-x-1 items-center">
                  <Selectbox className="w-fit" datas={["Bangla", "english"]} />
                  <Star/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
