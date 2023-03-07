import { Icon } from "@iconify/react";
import Link from "next/link";
import NavItems from "./nav_items";
const NavBar = () => {
  return (
    <nav>
      <div className="container navbar bg-base-100">
        <div className="flex-none">
          <div className="dropdown dropdown-hover">
            <button className=" btn btn-ghost">
              <Icon
                icon="heroicons-outline:menu-alt-1"
                width="24"
                height="24"
              />
            </button>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavItems />
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            iAdvertise.store
          </Link>
        </div>
        <div className="flex-none hidden tablet:block">
          <input
            type="search"
            placeholder="Search..."
            className="input w-full input-bordered"
          />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Icon icon="mingcute:user-3-fill" width="40" height="40" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
            >
              <li>
                <Link href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-base-200">
        <div className=" container hidden tablet:block">
          <ul className=" menu menu-horizontal z-50">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/businesses">Businesses</Link>
            </li>
            <li>
              <Link href="/all_listings">Listings</Link>
            </li>
            <li>
              <Link href="/listings">Categories</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
