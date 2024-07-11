import { MotionTrasition } from "../MotionTransition/MotionTrasition";


export function Practice() {
    return (
        <MotionTrasition>
            <div id="Practica" className="grid items-center py-20 md:grid-cols-2 md:py-56">
                <div className="md:pr-20">
                    <h2 className="mb-10  text-4xl font-extrabold"> Puede practicar a <br /> cualquier hora
                        <span className="text-pink-400"> que se adapte a ti</span>
                    </h2>
                    <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum placeat fuga ut sint, obcaecati eligendi ab eius ipsa quas molestias sit doloremque sapiente. Nulla, porro quibusdam? Repellendus, accusamus tenetur?</p>
                    <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">Empieza ya</button>
                </div>
               
                <video width="750" height="500" autoPlay muted loop >
                    <source src="/assets/business.mp4" type="video/mp4" />
                </video>

            </div>
        </MotionTrasition>

    )
}
