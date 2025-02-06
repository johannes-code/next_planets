import { planetData } from "../../data/planetdata";
import Image from "next/image";

export default function Page({ params }) {
  const planet = planetData.find((item) => item.ref === params.ref);

  return (
    <>
      <main className="flex flex-grid items-center justify-between min-h-screen p-24">
        <Image
          alt={planet?.name}
          width={600}
          height={600}
          src={planet?.image}
          className="object-cover w-2/3 h-2/3"
        />
        <div className="flex flex-col p-10">
          <p className="text-xl">
            <b>Name of planet:</b> {planet?.name}
          </p>
          <p className="text-xl">
            <b>Type of planet:</b> {planet?.type}
          </p>
          <p className="text-xl">
            <b>Size of planet:</b> {planet?.size}
          </p>
          <p className="text-xl">
            <b>Population:</b> {planet?.inhabitants}
          </p>
          <p className="text-xl">
            <b>Number of Moons:</b> {planet?.moons}
          </p>
          <p className="text-xl">
            <b>Description:</b> {planet?.description}
          </p>
        </div>
      </main>
    </>
  );
}
