"use server"
import { revalidatePath } from "next/cache";
import {signIn,signOut, auth} from "./auth"
// import { updateGuest } from "./data-service";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function actionSigniIn(){
    await signIn("google",{redirectTo:"/account"});
}
export async function actionSignOut() {
    await signOut({redirectTo:"/"});
}

export  async function updateGuestForm(formData){
  const session = await auth();
  if(!session){
    throw new Error('create a user first')
  }
   const nationalID = formData.get("nationalID")
    const [nationality , countryFlag] = formData.get("nationality").split('%');
  if(!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)){
    throw new Error('6 to 12 national id number')
  }
  const updateData = {nationalID ,  nationality,countryFlag};
 
const { data, error } = await supabase.from('guests').update(updateData).eq('id', session.user.guestId)
          
      if (error) {
        throw new Error('Guest could not be updated');
      }
      revalidatePath("/account/profile");
} 

export async function deleteBooking(bookingId) {
    const session = await auth()
    if(!session){
        throw new Error('create a user first')
      }
const guestBookings = await getBookings(session.user.guestId);
const guestBookingIds =  guestBookings.map((booking) => booking.id);
if(!guestBookingIds.includes(bookingId))
    throw new Error("plzz dlt your own ")
    const { error } = await supabase.from('bookings').delete().eq('id',session.user.guestId);

    if (error) {
      console.error(error);
      throw new Error('Booking could not be deleted');
    }
    revalidatePath("/account/reservations")
}


export async function updateReservation(formData) {
  const bookingId =Number(formData.get("hideId"));
  // authentication
  const session = await auth()
  if(!session){
      throw new Error('create a user first')
    }
    //autorization
const guestBookings = await getBookings(session.user.guestId);
const guestBookingIds =  guestBookings.map((booking) => booking.id);
if(!guestBookingIds.includes(bookingId))
  throw new Error("plzz edit  your own ")


//  building update data
  const updateData = {
  numGuests:Number(formData.get('numGuests')),
  observations: formData.get('observations').slice(0,1000)
                    };
  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

    // error handling
  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  // revalidate
  revalidatePath(`/account/reservations/edit/${bookingId}`)
  revalidatePath("/account/reservations")
  // redirection here
  redirect("/account/reservations")
  
}

export async function createReservation(bookingData,formData){
  const session = await auth()
  if(!session){
    throw new Error('create a user first')
  }
  const newBooking={
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get("observations"),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: true,
    hasBreakFast: false,
    status:"unconfermed"
  }
  const {  error } = await supabase
  .from('bookings')
  .insert([newBooking])
  // So that the newly created object gets returned!
  .select()
  .single();

if (error) {
  console.error(error);
  throw new Error('Booking could not be created');
}
revalidatePath(`/cabins/${bookingData.cabinId}`)
redirect("/account/reservations")
}