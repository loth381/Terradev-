import { MotionTrasition } from "../MotionTransition/MotionTrasition";
import { dataFeatures } from "./Feacture.data";

export function Feactures() {
    return (
        <div
            id="Feacture"
            className="grid grid-cols-2 gap-16  my-20 md:grid-cols-4 md:py-56"
        >
            <div>
                <h2 className="mb-4 text-4xl font-bold">Porque somos  <br />
                    <span className="text-pink-400">mejore que otros</span>
                </h2>
            </div>
            {dataFeatures.map(({ id, image, text, additionalClass }) => (
                <MotionTrasition key={id}>
                <div key={id}>
                    <div className={`rounded-3xl shadow-lg p-6 shadow-pink-100 ${additionalClass}`}>
                        <img src={`/assets/${image}.png`} alt={`Image ${text}`} className="" width="100" height="100" />
                        <h3 className="mt-3 mr-20 text-2xl font-bold">{text}</h3>
                    </div>  
                </div>
                </MotionTrasition>
            ))}
        </div>
    );
}
