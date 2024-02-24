import Star from "../svg/Star";

export default function DiscountBanner({ className, type }) {
  return (
    <div
      className={`discount-banner w-full h-[307px] bg-cover flex justify-center items-center ${
        className || ""
      }`}
      style={{
        background: `url(${
          import.meta.env.VITE_PUBLIC_URL
        }/src/assets/images/discount-banner-1.jpg) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {type === 3 ? (
        <div className="container-x mx-auto">
          <div className="best-services w-full  flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10">
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                    <Star/>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Free Shipping
                  </p>
                  <p className="text-sm text-qgray">When ordering over $100</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                  <Star/>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Free Return
                  </p>
                  <p className="text-sm text-qgray">
                    Get Return within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                  <Star/>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Secure Payment
                  </p>
                  <p className="text-sm text-qgray">
                    100% Secure Online Payment
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                  <Star/>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Best Quality
                  </p>
                  <p className="text-sm text-qgray">
                    Original Product Guarenteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div data-aos="fade-up">
            <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
              Get <span className="mx-1 text-qyellow">20%</span> Off Discount
              Coupon
            </h1>
            <p className="text-center sm:text-[18px] text-sm font-400">
              by Subscribe our Newsletter
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="sm:w-[543px] w-[300px] h-[54px] flex mt-8"
          >
            <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
              <span>
              <Star/>
              </span>
              <input
                type="email"
                name="email"
                className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
                placeholder="EMAIL ADDRESS"
              />
            </div>
            <button
              type="button"
              className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-600"
            >
              Get the Coupon
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
