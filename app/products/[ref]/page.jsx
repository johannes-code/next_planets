import { planetData } from "../../data/planetdata";
import Image from "next/image";

export default function Page({ params }) {
  const product = planetData.find((item) => item.ref === params.ref);
  console.log(planet);
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <p className="text-xl">{planet?.name}</p>
        <p className="text-xl">{planet?.type}</p>
        <p className="text-xl">{planet?.size}</p>
        <p className="text-xl">{planet?.description}</p>
        <p className="text-xl">{planet?.inhabitants}</p>
        <p className="text-xl">{planet?.moons}</p>

        <Image
          alt={planet?.name}
          width={600}
          height={600}
          src={planet?.image}
          className="object-cover w-full h-full"
        />
      </main>
    </>
  );
}
