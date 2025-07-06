import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="flex justify-end">
        <nav className="flex gap-5 w-full">
          <Link href={'login'} className="flex items-center header-button">
            {/*<UserIcon className="h-8 w-8" />*/}
            <span className=" ps-2">Hello, Sign In</span>

          </Link>
          <Link href={'cart'} className="header-button flex items-center flex-end">
            <ShoppingCart className="h-8 w-8" />
            <span className="  ps-2"> cart</span>
          </Link>
        </nav>
      </div>
    </>
  )
}
