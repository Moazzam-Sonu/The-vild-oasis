import { auth } from "@/app/_lib/auth";
import ReservationCard from "../../_components/ReservationCard";
import { getBookings } from "@/app/_lib/data-service";
export const metadata ={
  title: "reservations"
}
export default async function Page() {
 const session = await auth();
const bookings = await getBookings(session.user.guestId)

  return (
    <div>
     

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
