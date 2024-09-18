export function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              $244
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Sales
            </a>
          </div>
        </div>

        <div className="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              $199.4
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Cost
            </a>
          </div>
        </div>

        <div className="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              900
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Users
            </a>
          </div>
        </div>

        <div className="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              500
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Products
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
          <div className="px-6 py-2 border-b border-light-grey">
            <div className="font-bold text-xl">Trending Categories</div>
          </div>
          <div className="table-responsive">
            <table className="table text-grey-darkest">
              <thead className="bg-grey-dark text-white text-normal">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Last</th>
                  <th scope="col">Current</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                      Twitter
                    </button>
                  </td>
                  <td>4500</td>
                  <td>4600</td>
                  <td>
                    <span className="text-green-500">
                      <i className="fas fa-arrow-up"></i>5%
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <button className="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
                      Facebook
                    </button>
                  </td>
                  <td>10000</td>
                  <td>3000</td>
                  <td>
                    <span className="text-red-500">
                      <i className="fas fa-arrow-down"></i>65%
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>
                    <button className="bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
                      Amazon
                    </button>
                  </td>
                  <td>10000</td>
                  <td>3000</td>
                  <td>
                    <span className="text-red-500">
                      <i className="fas fa-arrow-down"></i>65%
                    </span>
                  </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                      Microsoft
                    </button>
                  </td>
                  <td>10000</td>
                  <td>3000</td>
                  <td>
                    <span className="text-green-500">
                      <i className="fas fa-arrow-up"></i>65%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
