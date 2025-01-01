import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId,  getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({cabin}) {
    const session = await auth();
    const [ setting ,bookedDates]= await Promise.all([  getSettings(), getBookedDatesByCabinId(cabin.id)])
  return (
   <div className=" grid grid-cols-2  border border-primary-800 min-h-[400px]">
            <DateSelector setting={setting} bookedDates={bookedDates} cabin={cabin} />
           {session?.user ? (<ReservationForm cabin={cabin} user={session?.user}/> ) : (<LoginMessage/>) }
          </div>
  )
}
