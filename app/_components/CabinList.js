import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinList({filter}) {
  let displayCabins;
  const cabins = await getCabins();

  if(cabins.length <= 0) return;
  if(filter === "all") displayCabins = cabins;
  if(filter === "small") displayCabins = cabins.filter(cab => cab.maxCapacity <=3 ) 
  if(filter === "medium") displayCabins = cabins.filter(cab => cab.maxCapacity <= 7 && cab.maxCapacity >= 4) 
  if(filter === "large") displayCabins = cabins.filter(cab =>  cab.maxCapacity >= 8) 
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>  
  )
}
