import Link from "next/link";
import { auth } from "../_lib/auth";
export default async function Navigation() {
  const session = await auth();
  
   return (
     <nav className="z-10 text-xl">
       <ul className="flex gap-16 items-center">
         <li>
           <Link href="/cabins" className="hover:text-accent-400 transition-colors">
             Cabins
           </Link>
         </li>
         <li>
           <Link href="/about" className="hover:text-accent-400 transition-colors">
             About
           </Link>
         </li>
         <li>
           {session?.user?.image ? 
           (<Link
             href="/account"
             className="hover:text-accent-400 flex gap-4 transition-colors"
           >
            <img className="h-8 rounded-full" src={session.user.image} alt={`img ${session.user.image}`} referrerPolicy="no-referrer" />
            <span>Guest area</span> 
           </Link>):
           (<Link
            href="/account"
            className="hover:text-accent-400  transition-colors"
          >
            
            <span>Guest area</span>
          </Link>)
           }
         </li>
       </ul>
     </nav>
   );
 }
 