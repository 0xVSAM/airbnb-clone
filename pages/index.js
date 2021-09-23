import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb - vsam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        

        <Header />
        <Banner />

        <main className='mx-auto max-w-7xl px-8 sm:px-16'>
        <section className='pt-6 '>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>

          {/* API */}

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item) => 
            <h1>
              <Smallcard 
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location} />
            </h1>
          )}
          </div>

          
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>
            Live Anywhere
          </h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map((item) => (
            <MediumCard
               Key={item.img}
               img={item.img}
               title={item.title}
             />
          )
          )}
          </div>
         
        </section>

        <section>
          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists Curated by Airbnb'
            buttonText='Get Inspired'
           />
        </section>
          
        </main>

        <Footer
        
        
         />


    



        {/* Banner */}
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
  const cardsData =await fetch('https://links.papareact.com/zp1').then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
