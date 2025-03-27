import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5 sticky top-0 z-50">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-3xl font-bold whitespace-nowrap text-purple-600">
              YZEN
            </span>
          </Link>

          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-purple-600 transition-all"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                  aria-current="page"
                >
                  products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/feature"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-purple-600 transition-all"
                >
                  Contact
                </Link>
              </li>
              <li className="flex justify-center items-center gap-x-10">
                <button className="border-2 border-purple-300 rounded-md px-3 py-1 bg-purple-100 text-purple-500">
                  Card <span className="text-pink-600">00</span>
                </button>
                <button className="border-2 border-purple-300 rounded-md px-3 py-1 bg-purple-100 text-purple-500">
                  Wishlist <span className="text-pink-600">00</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
