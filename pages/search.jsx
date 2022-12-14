import React from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

export default function Search({searchResult}) {

    const router = useRouter()
  const  {location, startDate, endDate, noOfGuests} = router.query
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays for - {range} - of {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap mb-5">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
            {searchResult?.map(item => <InfoCard {...item}/>)}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {

    const searchResult = await fetch('https://links.papareact.com/isz').then(res => res.json())
    return {
      props: {
          searchResult
      }, 
    }
  }
