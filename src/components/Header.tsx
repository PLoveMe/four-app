import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {Title,MenuList} from '@/lib/constans';
export default async function Header() {
  return (
    <div className="h-16 px-0 border-b bg-white">
        <div className="container flex items-center justify-between h-full">
            <h1 className="text-2xl">
                <Link href='/'>{Title}</Link>
            </h1>
            <div className="flex justtify-end space-x-4 text-5 h-1/3">
             {
              MenuList.map((item,index)=><>
              {index !==0 && <Separator orientation="vertical" />}
              <Link key={index} href={item.href}>{item.text}</Link>
              </>)
             }
            </div>
        </div>
    </div>
  );
}