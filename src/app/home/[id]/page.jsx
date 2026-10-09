
import { Suspense } from "react";

export default function HomeDetailsPage({ params }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeDetails params={params} />
    </Suspense>
  );
}

async function HomeDetails({ params }) {
  const { id } = await params;

  const data = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
  );
  const item = await data.json(); 

  console.log(item);

  return (
    <div>
      <h1>Home Details</h1>
      <p>ID: {id}</p>
    </div>
  );
}