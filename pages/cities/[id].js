import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../../layouts/Default';

export default function City() {

    const [city, setCity] = useState(null)

    const router = useRouter();
    const { id } = router.query

    const fetchCity = async () => {
        const response = await fetch(`/api/cities/${id}`)
        const data = await response.json()
        setCity(data)
    }

    useEffect(() => {
        fetchCity()
    }, [])

  return ( 
      <div>
        <Head>
                <title>{city.name}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <DefaultLayout>
            {city && (
                <div className="container mt-5 flex" style={{ display: "flex" }}>
                    <Image src={city.img} alt={city.alt} />
                    <div className="mx-5">
                        <h1>{city.name}</h1>
                        <p>{city.nickname}</p>
                        <p>{city.timezone}</p>
                    </div>
                </div>
            )}
        </DefaultLayout>
    </div>
  );
}