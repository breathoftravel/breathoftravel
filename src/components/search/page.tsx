import GridCard from "@/components/search/GridCard";
import Filter from "@/components/search/Filter";

export default function SearchPage() {
  const renderCards = () => {
    return Array.from({length: 15}).map((_, index) => (
      <div key={index} className={`col-span-12 lg:col-span-6 xl:col-span-4 rounded-lg`}>
        <GridCard/>
      </div>
    ));
  };
  return (
    <>
      <div className="container mx-auto px-2 py-8">
        <div className="grid grid-cols-12 gap-4">
          <div className={`col-span-12 block lg:hidden`}>
            <div className="drawer">
              <input id="filterSearch" type="checkbox" className="drawer-toggle"/>
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="filterSearch" className="btn btn-outline btn-sm">Filter</label>
              </div>
              <div className="drawer-side">
                <Filter/>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:col-span-3 rounded-lg hidden lg:block">
            <Filter/>
          </div>
          <div className="col-span-8 xl:col-span-9">
            <div className={`grid grid-cols-12 gap-4`}>
              {renderCards()}
            </div>
            <div className={`flex items-center justify-center mt-5`}>
              <div className=" join">
                <button className="join-item btn">First</button>
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
                <button className="join-item btn">Last</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
