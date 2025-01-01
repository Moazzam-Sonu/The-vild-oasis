import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationContextProvider } from "./_components/ReservationContextProvider";
import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / Hotal App",
    default: "Welcome to Hotal",
  },
  description: "This is our Next.js app about a hotel app.",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function AppLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex  flex-col `}>
        <Header />
        <div className="flex-1 px-8 py-12 relative grid">
        <main className="max-w-7xl m-auto h-full w-full">
<ReservationContextProvider>
          {children}
</ReservationContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
