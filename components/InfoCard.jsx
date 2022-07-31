import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row cursor-pointer hover:opacity-80 hover:shadow-lg transition transform ease-out duration-150 justify-between  mt-4 rounded-lg py-4 pl-2 first:border-t ">
        <div className=" flex space-x-6 flex-col md:flex-row">
          <div className="relative w-full h-56 md:w-80 flex-shrink-0 ">
            <Image
              className="rounded-2xl"
              src={img}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex">
            <div>
              <p className="text-gray-300">{location}</p>
              <h2 className="mt-4 text-xl  font-semibold">{title}</h2>
              <p className="mt-5 text-gray-400">{description}</p>

              <div className="md:mt-20 flex items-center mt-4 ">
                <StarIcon className="text-red-400 h-5" /> {star}
              </div>
            </div>
          </div>
        </div>
        <div>
<div className="md:static absolute bottom-20 right-0 ">
<HeartIcon className="h-7 md:ml-16 " />

</div>
          <div className="md:mt-28 mt-8 md:flex-col flex items-center justify-between">
            <p className="text-2xl md:mr-4 font-semibold">{price}</p>
            <p className="md:text-right  md:mr-4 md:mt-2 text-gray-300">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
