import Image from "next/image";
import { MotionTrasition } from "../MotionTransition";

export default function Discount() {
  return (
    <MotionTrasition>
      <div className="grid items-center px-5 py-10 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-t from-violet-500 to-fuchsia-500 ">
        <div>
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            puede practica en el momento que te convenga
          </h2>
          <p className="my-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum
            ex ipsum cumque perspiciatis? Cumque sapiente ratione dolore velit
            nostrum dolorem doloremque placeat deserunt sint, reprehenderit
            harum labore iure quisquam.
          </p>
          <button className="px-8 py-3 text-white bg-pink-400 rounded-xl">
            Tengo un cupon
          </button>
        </div>
        <Image src="/assets/discount.png" alt="Discount image" width="350" height="350" className="mx-auto"/>
      </div>
    </MotionTrasition>
  );
}
