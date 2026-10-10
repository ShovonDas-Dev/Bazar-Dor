import { Suspense } from "react";

import Loading from "../loading";
import CategoryContent from "./CatagoryContent";

// Parent non-async, direct stream trigger korbe
const CategoryProducts = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`,
  );
  const categoryData = await res.json();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryContent categoryData={categoryData} />
      </Suspense>
    </div>
  );
};

export default CategoryProducts;




