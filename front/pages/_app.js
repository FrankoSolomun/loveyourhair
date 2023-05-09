import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />
        <link rel="icon" sizes='16x16' href="/favicon/lyh16.png" />
        <link rel="icon" sizes='24x24' href="/favicon/lyh24.png" />
        <link rel="icon" sizes='32x32' href="/favicon/lyh32.png" />
        <link rel="icon" sizes='48x48' href="/favicon/lyh48.png" />
        <link rel="icon" sizes='64x64' href="/favicon/lyh64.png" />
        <link rel="icon" sizes='96x96' href="/favicon/lyh96.png" />
        <link rel="icon" sizes='128x128' href="/favicon/lyh128.png" />
        <link rel="icon" sizes='192x192' href="/favicon/lyh192.png" />
        <link rel="icon" sizes='256x256' href="/favicon/lyh256.png" />



        <title>Love Your Hair Selective</title>
        <meta name="description" content="Selective Professional je ekskluzivni talijanski brend, ponosno proizvedan 100% u Italiji, s više od 30 godina iskustva. Zastupljen je u 70 zemlja diljem svijeta . Proizvodi su rezultat izražene kreativnosti ,originalnosti i strasti za ljepotu kose. Uvjerite se zašto je jedan od najviše hvaljenih talijanskih brendova."></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );

}
