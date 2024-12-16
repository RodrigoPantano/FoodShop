import Sidebar from "./components/shared/Sidebar"
import { IoMenu, IoClose, IoSearchOutline } from "react-icons/io5";
import { FaUserCircle, FaPlus, FaAngleDown, FaTrash } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }

  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <>
      <div className="bg-stone-700 w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        {/* menu movil */}
        <nav className="lg:hidden bg-stone-900 fixed w-full bottom-0 left-0 text-3xl text-gray-500 py-2 px-6 flex items-center justify-between rounded-tl-xl rounded-tr-xl">

          <button className="p-2">
            <FaUserCircle />
          </button>

          <button className="p-2">
            <FaPlus />
          </button>

          <button onClick={toggleOrder} className="p-2">
            <PiBowlFoodFill />
          </button>

          <button onClick={toggleMenu} className="text-green-400 p-2">
            {showMenu ? <IoClose /> : <IoMenu />}
          </button>
        </nav>

        <main className="grid grid-cols-1 pb-20 lg:pl-32 lg:grid-cols-8">
          <div className="p-4 lg:col-span-6 md:p-8">
            {/* header */}
            <header>
              {/* title and search */}
              <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
                <div>
                  <h1 className="text-2xl"><span className="text-green-500">Food</span>Store</h1>
                  <p className="text-gray-500">13 diciembre 2024</p>
                </div>
                <form >
                  <div className="w-full relative">
                    <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      className="bg-stone-900 w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              {/* tabs */}
              <nav className="text-gray-300 flex items-center justify-between border-b mb-4 md:justify-start md:gap-7">
                <a href="#" className="relative text-green-500 py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-green-500 before:left-0 before:rounded-full before:-bottom-[1px]">Hot dishes</a>
                <a href="#" className="py-2 pr-4">Cold dishes</a>
                <a href="#" className="py-2 pr-4">Soup</a>
                <a href="#" className="py-2">Grill</a>
              </nav>
            </header>
            {/* title content */}
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-2 text-gray-300 bg-stone-900 rounded-md px-2 py-1"><FaAngleDown />Dine in</button>
            </div>

            {/* content */}
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">

              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
              {/* card */}
              <div className="bg-stone-900 p-8  rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center">
                <img src="plato2.png" className="w-40 h-40 object-cover -mt-20 " />
                <p className="text-xl">Speacy seasoned seafood nodles and chicken</p>
                <span className="text-gray-400">$2.30</span>
                <p className="text-gray-600">20 bowls available</p>
              </div>
            </div>
          </div>
          <div className={`fixed bg-stone-900 top-0 w-full h-full lg:col-span-2 transition-all lg:right-0 lg:w-[400px] ${showOrder ? 'right-0':'-right-full'}`}>
            {/* orders */}
            <div className="relative pt-16 p-8 h-full lg:pt-8">
              <IoClose onClick={toggleOrder} className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-stone-800 rounded-full text-xl lg:hidden" />
              <h1 className="text-2xl my-4">Orders #1536</h1>
              {/* etiquetas */}
              <div className="flex items-center gap-4 flex-wrap mb-8">
                <button className="bg-green-600 py-2 px-4 rounded-xl">Dine in</button>
                <button className="py-2 px-4 rounded-xl text-green-600 border border-green-800">To Go</button>
                <button className="py-2 px-4 rounded-xl text-green-600 border border-green-800">Delivery</button>
              </div>
              {/* products */}
              <div className="h-[500px] md:h-[800px] lg:h-[800px] overflow-scroll lg:overflow-auto">
                {/* product */}
              <div>
                <div className="grid grid-cols-6 mb-4 p-4">
                  <h5 className="col-span-4">Item</h5>
                  <h5 className="col-span-1">Qty</h5>
                  <h5 className="col-span-1">Price</h5>
                </div>
                {/* product card */}
                <div className="bg-stone-800 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    {/* description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="plato2.png" className="w-12 h-12 object-cover" />
                      <div>
                        <h5 className="text-sm">Speacy season...</h5>
                        <span className="text-xs text-gray-500">$2.30</span>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="pl-1">
                      <span>02</span>
                    </div>
                    {/* Price */}
                    <div >
                      <span>$4.60</span>
                    </div>
                  </div>
                  {/* note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" className="bg-stone-900 rounded-lg py-2 px-2 outline-none" placeholder="Order note..." />
                    </form>
                    <div className="text-center col-span-1 ">
                      <button className="border border-red-500 p-2 rounded-lg ">
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* product card */}
                <div className="bg-stone-800 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    {/* description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="plato2.png" className="w-12 h-12 object-cover" />
                      <div>
                        <h5 className="text-sm">Speacy season...</h5>
                        <span className="text-xs text-gray-500">$2.30</span>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="pl-1">
                      <span>02</span>
                    </div>
                    {/* Price */}
                    <div >
                      <span>$4.60</span>
                    </div>
                  </div>
                  {/* note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" className="bg-stone-900 rounded-lg py-2 px-2 outline-none" placeholder="Order note..." />
                    </form>
                    <div className="text-center col-span-1 ">
                      <button className="border border-red-500 p-2 rounded-lg ">
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* product card */}
                <div className="bg-stone-800 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    {/* description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="plato2.png" className="w-12 h-12 object-cover" />
                      <div>
                        <h5 className="text-sm">Speacy season...</h5>
                        <span className="text-xs text-gray-500">$2.30</span>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="pl-1">
                      <span>02</span>
                    </div>
                    {/* Price */}
                    <div >
                      <span>$4.60</span>
                    </div>
                  </div>
                  {/* note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" className="bg-stone-900 rounded-lg py-2 px-2 outline-none" placeholder="Order note..." />
                    </form>
                    <div className="text-center col-span-1 ">
                      <button className="border border-red-500 p-2 rounded-lg ">
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* product card */}
                <div className="bg-stone-800 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-2">
                    {/* description product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src="plato2.png" className="w-12 h-12 object-cover" />
                      <div>
                        <h5 className="text-sm">Speacy season...</h5>
                        <span className="text-xs text-gray-500">$2.30</span>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="pl-1">
                      <span>02</span>
                    </div>
                    {/* Price */}
                    <div >
                      <span>$4.60</span>
                    </div>
                  </div>
                  {/* note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input type="text" className="bg-stone-900 rounded-lg py-2 px-2 outline-none" placeholder="Order note..." />
                    </form>
                    <div className="text-center col-span-1 ">
                      <button className="border border-red-500 p-2 rounded-lg ">
                        <FaTrash className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
              </div>
              
              {/* submit */}
              <div className="absolute bottom-0 bg-stone-800 p-4 left-0 w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Discount</span>
                  <span>$0</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span>$120.50</span>
                </div>
                <div>
                  <button className="bg-green-700 w-full py-2 px-4 rounded-lg">Continue to payment</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
