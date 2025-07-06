import { ArrowUp, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import data from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (

    <>

      <footer>
        <div className="w-full flex items-center justify-center">
          <Button variant={'ghost'} className="bg-gray-800 w-full rounded-none cursor-pointer text-white">
            <ChevronUp className="h-8 w-8" />
            Back to Top</Button>
        </div>

        <div className="bg-black text-white">
          <div className="py-3">
            <div className="flex justify-center items-center gap-6">
              {
                data?.footerSecondaryMenus?.map(menu => {
                  return <Link key={menu?.name} href={menu?.href} className="">{menu?.name}</Link>
                })
              }
            </div>
            <div className="text-center">
              <p>© 2000-2024, Next-Ecommerce.com, Inc. or its affiliates
              </p>
            </div>

            <div className="mt-8 text-center">
              <p>123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
              </p>
            </div>
          </div>

        </div>


      </footer>

    </>)
}
