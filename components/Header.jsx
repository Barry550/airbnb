import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

export default function Header({placeholder}) {
  const router = useRouter()
  const [seachInput, setSearchInput] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const resetInput = () =>{
    setSearchInput('')
  }

  const search = () =>{

    router.push({
      pathname: '/search',
      query:{
        location: seachInput,
        startDate: startDate.toISOString(),
        endDate:  endDate.toISOString(),
        noOfGuests: noOfGuests
      }
    })
  }

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="md:sticky w-full relative top-0 z-50 md:grid md:grid-cols-3  bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div onClick={()=> router.push('/')} className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex my-3 md:-my-3 items-center border-2 rounded-full py-2 md:shadow-sm  ">
        <input
          value={seachInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent text-gray-600 outline-none text-sm placeholder-gray-400"
          type="text"
          placeholder={placeholder || "start your seach"}
        />
        <SearchIcon className="hidden md:inline-block h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline-block">become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex border-2 space-x-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {seachInput && (
        <div  className="md:col-span-3 md:mx-auto mt-4 md:relative">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          

          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="flex justify-around">
            <buttom onClick={resetInput} className="text-gray-500 cursor-pointer">Cancel</buttom>
            <buttom onClick={search} className="text-red-400 cursor-pointer">Search</buttom>
          </div>
        </div>
      )}
    </header>
  );
}
