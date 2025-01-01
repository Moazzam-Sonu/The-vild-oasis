"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteBooking } from '../_lib/actions';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';


function DeleteReservation({ bookingId }) {
 const [isPending, startTransetion]= useTransition()
  function handleDeletion(){
    if(confirm("are you sure you wana delete this")){
      startTransetion(()=>deleteBooking(bookingId))
    }
  }
  return (
    <button onClick={handleDeletion} className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
     {
      !isPending? 
     <><TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span></>: <span className='m-auto'><SpinnerMini/></span>
     }
    </button>
  );
}

export default DeleteReservation;
