"use client";
import "./ProductList.scss";
import Card from "@/app/components/Card";
import Link from "next/link";

export default function ProductList({ data }) {
  
  return (
    <div className="product-list xl:w-[1035px]">
      {data?.title && <h2 className="font-bold text-2xl">{data.title}</h2>}

      <div className="relative h-[440px] flex justify-center xl:block">
        <div className="mask xl:w-[1035px] w-[310px]">
          <div className="track">
            {data?.items?.map((seed) => (
              <Link href={`/product_detail?name=${seed.name.replace(/\s/g, '_').replace(/&/g, 'and')}`} key={seed.name}>
                <Card key={seed.name} data={seed} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
