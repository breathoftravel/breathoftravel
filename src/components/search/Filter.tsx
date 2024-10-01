export default function Filter() {
  return (
    <div className="card">
      <div className="card-body rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="card-title">Filter</h3>
          <button className="btn btn-sm btn-outline ml-2">Reset</button>
        </div>
        <hr/>
        <div className="collapse">
          <input type="checkbox"/>
          <h3 className="collapse-title font-medium">
            Country
          </h3>
          <div className="collapse-content">
            <div className="cursor-pointer flex py-1">
              <input type="checkbox" defaultChecked className="checkbox checkbox-sm mx-2" value={'Phuket'}/>
              <label className="label-text">Phuket</label>
            </div>
            <div className="cursor-pointer flex py-1">
              <input type="checkbox" className="checkbox checkbox-sm mx-2" value={'Phangnga'}/>
              <label className="label-text">Phangnga</label>
            </div>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox"/>
          <h3 className="collapse-title font-medium text-nowrap">
            Price Range
          </h3>
          <div className="collapse-content flex justify-between items-center">
            <div className="select-wrapper">
              <select className="select select-bordered select-sm w-full max-w-xs mr-2" value={100}>
                <option disabled selected>0</option>
                <option value={100}>100</option>
                <option value={1000}>1000</option>
                <option value={10000}>10000</option>
              </select>
              <label htmlFor="select-1" className="text-xs text-center text-gray-500 block mt-1">min</label>
            </div>
            <div className="select-wrapper">
              <select className="select select-bordered select-sm w-full max-w-xs ml-2" value={100000}>
                <option disabled selected>0</option>
                <option value={1000}>1000</option>
                <option value={10000}>10000</option>
                <option value={100000}>100000</option>
              </select>
              <label htmlFor="select-2" className="text-xs text-center text-gray-500 block mt-1">max</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}