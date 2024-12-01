import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { linkedIn } from '../config/values';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>Aurum Gladio / Timo Goudzwaard | Frontend Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Timo Goudzwaard, Frontend Engineer with expertise in React and Angular"
        />
      </Head>

      <Header />

      <main className="container p-4 mt-12 mb-6 mx-auto">
        <div className="flex justify-center">
          <Image
            src="/memoji.png"
            alt="Picture of the author"
            width={85}
            height={111}
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-center">
          Hi, ik ben Timo. <br />
          Frontend Engineer met expertise in Angular en React
        </h2>

        <h2 className="text-2xl font-bold mt-8 text-center text-indigo-500">
          Huidige opdracht: InShared
        </h2>

        <p className="text-center text-xl mt-2 max-w-2xl mx-auto">
          Momenteel werk ik aan een uitdagende opdracht bij InShared. Hier
          ondersteun ik een multidisciplinair team bij het ontwikkelen en
          implementeren van een salesfunnel. Mijn focus ligt op het bouwen van
          de Frontend in Angular, waarbij ik zowel technische expertise als
          samenwerking centraal stel.
        </p>

        <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
          In deze rol ben ik verantwoordelijk voor de zelfstandige ontwikkeling
          van de Frontend. Hierbij maak ik optimaal gebruik van de kennis en
          ervaring die ik heb opgedaan tijdens eerdere projecten en opdrachten.
        </p>

        <h2 className="text-2xl font-bold mt-8 text-center text-indigo-500">
          Waarom kiezen voor mij?
        </h2>

        <p className="text-center text-xl mt-2 max-w-2xl mx-auto">
          Met een sterke passie voor Frontend-ontwikkeling en een liefde voor
          het bouwen van gebruiksvriendelijke interfaces, breng ik enthousiasme
          en toewijding naar elk project. Mijn ervaring met frameworks zoals
          Angular en React stelt me in staat om robuuste en schaalbare
          oplossingen te leveren die aansluiten bij de behoeften van de
          gebruiker.
        </p>

        <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
          Ik ben flexibel en leer snel nieuwe technieken en tools. Dit betekent
          dat ik mij moeiteloos aanpas aan nieuwe technologieën en werkwijzen,
          waardoor ik effectief kan bijdragen aan innovatieve projecten in een
          continu veranderende digitale wereld.
        </p>

        <p className="text-center text-xl mt-4 max-w-2xl mx-auto">
          Of het nu gaat om het ontwikkelen van een compleet nieuwe Frontend of
          het optimaliseren van bestaande systemen, ik zorg ervoor dat
          gebruiksvriendelijkheid en een aantrekkelijk design hand in hand gaan.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-indigo-500 hover:bg-indigo-700 transition text-white py-4 px-6 text-xl shadow-md"
          >
            Neem contact op
          </a>
        </div>
      </main>
    </div>
  );
}
