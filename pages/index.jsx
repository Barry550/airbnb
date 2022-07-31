import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ data, card }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from a server  - API ent point */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
         <div className="flex space-x-2 overflow-scroll scrollbar-hide p-3 -ml-3">
         {card?.map(({ img, title }) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
         </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"/>
      </main>

      <Footer/>
    </div> 
  );
};

export default Home;

export async function getStaticProps() {
  const data = await fetch("https://links.papareact.com/pyp").then((res) =>
    res.json()
  );

  const card = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      data,
      card,
    },
  };
}
