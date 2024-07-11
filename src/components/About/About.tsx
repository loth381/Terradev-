import Image from "next/image";
import { MotionTrasition } from "../MotionTransition/MotionTrasition";


export function About() {
    return (

        <div id="Nosotros" className="grid items-center py-20  md:grid-cols-2 lg:py-56">
            <MotionTrasition>
                <Image src="/assets/about.png" alt="About Image" width="600" height="400" />s
            </MotionTrasition>
            <div className="md:pr-20">
                <h2 className="mb-10 text-4xl font-extrabold ">Hemos estado <br />
                    <span className="text-pink-400">Mejorando Nuestro productos</span> <br />
                    durante años
                </h2>
                <p className="mb-10 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati ipsa quibusdam laudantium error exercitationem unde. Harum eius, earum natus aliquid saepe dicta vitae cupiditate voluptate sequi corporis laudantium nostrum.
                </p>
                <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">Enpieza ya</button>

            </div>

        </div>

    )
}
