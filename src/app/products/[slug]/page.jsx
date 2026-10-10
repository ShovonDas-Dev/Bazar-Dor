import { Suspense } from "react";

import Loading from "../loading";
import CategoryContent from "./CatagoryContent";

// Parent non-async, direct stream trigger korbe
const CategoryProducts = ({ params }) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
};

export default CategoryProducts;




