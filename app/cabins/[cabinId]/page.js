import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export async function generateStaticParams() {
//   const cabinids = await getCabins();
//   const ids = cabinids.map(cabin => ({ cabinId: String(cabin.id) }));
//   return ids;
// }

export async function generateMetaData({ params }) {
  try {
    const { name } = await getCabin(params.cabinId);
    return { title: `${name}` };
  } catch (error) {
    console.error("Error fetching cabin metadata:", error);
    return { title: "Cabin Not Found" };
  }
}

export default async function Page({ params }) {
  try {
    const cabin = await getCabin(params.cabinId);
    
  if (!cabin) {
      return (
        <div className="max-w-6xl mx-auto mt-8 text-center">
          <h1 className="text-3xl font-semibold">Cabin Not Found</h1>
          <p className="text-lg text-primary-300 mt-4">
            Sorry, we couldn't find the cabin you're looking for.
          </p>
        </div>
      );
    }
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <Cabin cabin={cabin} />
        <div>
          <h2 className="text-5xl font-semibold text-center mb-10 text-accent-500">
            Reserve {cabin.name} today. Pay on arrival.
          </h2>   
          <Suspense fallback={<Spinner/>} >
            <Reservation cabin={cabin}/>
          </Suspense>     
        </div>
      </div>
      
    );
  } catch (error) {
    console.error("Error fetching cabin details:", error);
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <h1 className="text-3xl font-semibold">Error Loading Cabin Details</h1>
        <p className="text-lg text-primary-300 mt-4">
          Please try again later.
        </p>
      </div>
    );
  }
}
