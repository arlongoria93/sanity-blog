import Link from "next/link";
import ab from "../public/ab.jpg";
function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
          />
        </Link>
        <div className="hidden items-center md:inline-flex space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border  border-green-600 rounded-full px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
