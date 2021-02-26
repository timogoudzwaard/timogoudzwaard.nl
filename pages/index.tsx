import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { email, linkedIn } from '../config/values';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Timo Goudzwaard | Frontend Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mt-12 mx-auto">
        <div className="flex justify-center">
          <Image
            src="/memoji.png"
            alt="Picture of the author"
            width={127}
            height={166}
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-center">Hi, ik ben Timo</h2>

        <h1 className="text-5xl max-w-2xl text-center mx-auto mt-12 font-bold">
          Frontend Engineer met expertise in React en Angular
        </h1>
        <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
          Momenteel ben ik lead ontwikkelaar bij Unive, waarin ik
          verantwoordelijk ben voor de kwaliteit van de huidige Angular stack.
        </p>

        <div className="flex justify-center mt-12">
          <a
            href={linkedIn}
            target="_blank"
            className="rounded-2xl bg-indigo-500 hover:bg-indigo-700 transition text-white py-4 px-6 text-xl shadow-md"
          >
            Neem contact met me op
          </a>
        </div>
      </main>
    </div>
  );
}
