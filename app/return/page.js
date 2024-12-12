import Link from "next/link";

export default function Return() {


    return (
      <div className="flex flex-col xl:w-[1030px] sm:w-[515px] w-[258px] justify-center mx-auto my-[25px] gap-[20px] ">
        <h2 className="font-bold text-center text-2xl">
        RETURN POLICY
      </h2>
      <p>At Graham Gardens, we are committed to providing you with the highest quality products. If for any reason you are not completely happy with your purchase, we offer the following return policy:</p>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        <span className="font-bold">Free Returns Within 30 Days:</span> You may return any seed packets (opened or unopened) within 30 days of purchase for a full refund. We will cover the cost of return shipping.
        </li>
        <li>
        <span className="font-bold">Returns After 30 Days:</span> For returns made after 30 days, we will still accept your return; however, a shipping fee of $2.99 will be deducted from your refund.
        </li>
      </ul>
      <p>If you have any questions or need assistance with your return, please contact our customer service team <Link href="/contact" className="underline text-blue-700">HERE</Link>, and we&apos;ll be happy to help. Your satisfaction is our priority!</p>
      </div>
           
    );
  }
  