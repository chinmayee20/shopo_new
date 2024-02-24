import Star from "../svg/Star";
import InputCom from "../InputCom";
import PageTitle from "../PageTitle";
import Layout from "../Layout";
import { productBrands, productData, productRatings } from "../Constants";

export default function ProductsCompaire() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="products-compaire-wrapper w-full bg-white pb-[40px]">
        <div className="w-full mb-5">
          <PageTitle
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "compaire", path: "/products-compaire" },
            ]}
            title="Product Comparison"
          />
        </div>

        <div className="container-x mx-auto">
          <div className="w-full border border-qgray-border">
            <table className="table-wrapper">
              <tbody>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] pt-[30px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[18px] font-medium text-qblack mb-4">
                        Product Comparison
                      </h1>
                      <p className="text-[13px] text-qgraytwo">
                        Select products to see the differences and similarities
                        between them
                      </p>
                    </div>
                  </td>
                  {productData.map((product) => (
                    <td className="product w-[235px] bg-white p-6 border-b border-r border-qgray-border">
                      <div className="w-full mb-[30px]">
                        <div className="w-full h-[44px]">
                          <InputCom
                            type="text"
                            placeholder="Search Product..."
                            inputClasses="w-full h-full px-2"
                          >
                            <div
                              className="absolute right-2 z-10 bg-white"
                              style={{ top: "calc(100% - 28px)" }}
                            >
                              <Star />
                            </div>
                          </InputCom>
                        </div>
                      </div>
                      <div className="product-img flex justify-center mb-3 ">
                        <div className="w-[161px] h-[161px]">
                          <img
                            src={`${
                              import.meta.env.VITE_PUBLIC_URL
                            }/src/assets/images/${product.image}`}
                            alt=""
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-center text-[15px] font-medium text-qblack leading-[24px] mb-2">
                        {product.name}
                      </p>
                      <p className="text-center text-[15px] font-medium text-qred leading-[24px]">
                        {product.price}
                      </p>
                    </td>
                  ))}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Star Rating
                      </h1>
                    </div>
                  </td>
                  {productRatings.map((rating, index) => (
                    <td
                      key={index}
                      className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top"
                    >
                      <div className="flex space-x-2 items-center">
                        <span className="text-[15px] font-medium text-qblack">
                          {rating.rating}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} />
                          ))}
                        </div>
                        <span className="text-[13px] font-normal text-qgraytwo">
                          ({rating.count})
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Model
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          Apple MacBook Air 13"
                        </span>
                      </td>
                    );
                  })}
                </tr>

                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Brand
                      </h1>
                    </div>
                  </td>
                  {productBrands.map((brand, index) => {
                    return (
                      <td
                        key={index}
                        className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top"
                      >
                        <span className="text-[13px] font-normal text-qgraytwo">
                          {brand}
                        </span>
                      </td>
                    );
                  })}
                </tr>

                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Availability
                      </h1>
                    </div>
                  </td>
                  <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                    <span className="text-[13px] font-semibold text-green-500">
                      In Stock
                    </span>
                  </td>
                  <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                    <span className="text-[13px] font-semibold  text-qred">
                      Out of Stock
                    </span>
                  </td>
                  <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                    <span className="text-[13px] font-semibold  text-green-500">
                      In Stock
                    </span>
                  </td>
                  <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                    <span className="text-[13px] font-semibold  text-qred">
                      Out of Stock
                    </span>
                  </td>
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Colors
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <div className="flex space-x-2 items-center">
                          <span className="w-4 h-4 rounded-full bg-[#649EFF]"></span>
                          <span className="w-4 h-4 rounded-full bg-[#BAFE90]"></span>
                          <span className="w-4 h-4 rounded-full bg-[#FF7173]"></span>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        import.metaor
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          Apple M1 chip with 8-core CPU and 7-core GPU
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Display
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          13.3-inch
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Memory
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          8GB RAM
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Storage
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          1TB 5400rpm SATA HDD
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Graphics
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          Intel UHD Graphics 600
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Operating System
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          macOS
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Battery
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          Built-in 49.9‑watt‑hour
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Wi-Fi
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          802.11ac Wi-Fi wireless
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Bluetooth
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          5.0 wireless technology
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        WebCam
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          720p FaceTime HD camera
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="table-row-wrapper">
                  <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                    <div className="">
                      <h1 className="text-[15px] font-medium text-qblack ">
                        Audio
                      </h1>
                    </div>
                  </td>
                  {[0, 1, 2, 3].map(() => {
                    return (
                      <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                        <span className="text-[13px] font-normal text-qgraytwo">
                          Stereo speakers
                        </span>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
