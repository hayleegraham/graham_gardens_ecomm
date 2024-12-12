import Link from "next/link";

export default function Faq() {


    return (
      <div className="flex flex-col xl:w-[1024px] sm:w-[515px] w-[258px] justify-center mx-auto my-[25px] gap-[20px] ">
        <h2 className="font-bold text-center text-2xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <h3 className="font-bold text-xl">How can I return a product?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        We stand behind the quality of our seeds. If you&apos;re not satisfied with your purchase, we offer free returns within 30 days. After 30 days, returns are still accepted, but a shipping charge of $2.99 will be applied. See our full Return Policy <Link href="/return" className="underline text-blue-700">HERE</Link>.
        </li>
      </ul>
      <h3 className="font-bold text-xl">How do I track my order?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        Once your order has been shipped, you&apos;ll receive a confirmation email with a tracking number. You can use this number to track your order through the carrier&apos;s website.
        </li>
      </ul>
      <h3 className="font-bold text-xl">How should I store my seeds?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        To keep your seeds viable for as long as possible, store them in a cool, dry place, away from direct sunlight. An airtight container in a cool area, such as a basement or refrigerator, works well.
        </li>
      </ul>
      <h3 className="font-bold text-xl">What payment methods do you accept?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        We accept major credit cards (Visa, MasterCard, American Express) and PayPal. All transactions are secure and encrypted through PayPal.
        </li>
      </ul>
      <h3 className="font-bold text-xl">How can I contact customer support?</h3>
      <ul className="list-disc pl-[20px]">
      <li className="pb-[10px]">
      You can reach us by email at contact@grahamgardens.com or call us at (888) 888-8888. Our customer service agents are available Monday through Friday, 9 AM to 5 PM EST. Or submit a contact request form <Link href="/contact" className="underline text-blue-700">HERE</Link>.
        </li>
      </ul>
      <h3 className="font-bold text-xl">Do you charge for shipping?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        Yes, but only for orders under $25.00. If your order is under $25.00, you will be charged a shipping fee of $2.99, otherwise, shipping is free!
        </li>
      </ul>
      <h3 className="font-bold text-xl">Where can I learn more about gardening?</h3>
      <ul className="list-disc pl-[20px]">
        <li className="pb-[10px]">
        We provide resources on our website, including a beginner&apos;s gardening guide and planting tips. Check out our Gardening Guide for Beginners <Link href="/guide" className="underline text-blue-700">HERE</Link>.
        </li>
      </ul>
      <p>If you have any other questions, don&apos;t hesitate to reach out to our team. We&apos;re here to help make your gardening journey a success!</p>
      </div>
           
    );
  }
  