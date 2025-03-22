import Sort from "@/components/Sort";
import Products from "@/components/Products";
export default async function Page() {
  return (
    <div className="container flex py-6">
     <Sort />
     <Products />
    </div>
  );
}   