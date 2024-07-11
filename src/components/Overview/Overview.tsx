import Image from "next/image";
import Link from "next/link";
import { social } from "../../data/social";

export  function Overview() {
    return (
      <div id="Inicio" className="p-5 mt-3 bg-gradient-to-t from-indigo-500 via-purple-400 to-pink-400 md:px-24 md:py-52">
        <div className="items-center md:grid md:grid-cols-2 ">
          <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl">
            Desarrolla tus Skills <br />  para el futuro
          </h1>
          <p className="mt-5 text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas tempora voluptatum, odio architecto quibusdam eos, quo optio inventore perferendis provident facilis accusantium ipsum quam voluptate, est laudantium fugiat temporibus molestias!</p>
          <div className="flex justify-start  gap-4 my-10 ">
            {social.map(({id,icon, name,link}) =>(
              <Link href={link} key={id} target="_blank" rel="Avendaño">
                <Image src={`/svg/${icon}.svg`} alt={name} width="40" height="40" />
              </Link>
            ))}
          </div>
          <div >
            <button className="px-8 py-3 mr-10 mb-5 text-white bg-pink-400 rounded-xl ">Enpieza ya</button>
            <button className="px-8 py-3 mr-10 text-white border-2 rounded-xl ">Enpieza ya</button>

          </div>
        </div>
        <div>
          <Image src="/assets/overview.png" alt="Overview" width="350" height="500" />
        </div>
      </div>
    )
  }

