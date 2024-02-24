import Star from "../svg/Star";

export default function SearchBox({ className,type }) {
  return (
    <>
      <div
        className={`w-full h-full flex items-center  border border-qgray-border bg-white ${
          className || ""
        }`}
      >
        <div className="flex-1 bg-red-500 h-full">
          <form action="#" className="h-full">
            <input
              type="text"
              className="search-input"
              placeholder="Search Product..."
            />
          </form>
        </div>
        <div className="w-[1px] h-[22px] bg-qgray-border"></div>
        <div className="flex-1 flex items-center px-4">
          <button
            type="button"
            className="w-full text-xs font-500 text-qgray flex justify-between items-center"
          >
            <span>All Categories</span>
            <span>
              <Star/>
            </span>
          </button>
        </div>
        <button
          className={` w-[93px] h-full text-sm font-600  ${type===3?'bg-qh3-blue text-white':'search-btn'}`}
          type="button"
        >
          Search
        </button>
      </div>
    </>
  );
}
