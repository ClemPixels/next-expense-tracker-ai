// import { SignIn } from '@clerk/nextjs';
// export default function Page() {
//   return (
//     <div className='flex items-center justify-center min-h-screen'>
//       <SignIn />
//     </div>
//   );
// }

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      {/* Left side with illustration */}
      <div className="flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-gray-100">
          Track Every Expense 💰 Effortlessly
        </h1>
        <p className="text-lg md:text-xl font-light max-w-md text-center mb-8 text-gray-800 dark:text-gray-100">
          Stay on top of your finances with ease. Your money, your control.
        </p>

        <div className="w-64 h-64 md:w-80 md:h-80 relative animate-float">
          <Image
            src="/finance-illustration.svg"
            alt="Finance illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right side with Clerk sign-in */}
      <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 ">
        <div className="">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
