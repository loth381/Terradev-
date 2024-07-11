import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[450px_1fr_1fr_1fr] md:gap-10">
        <div>
          <img
            src="/assets/logo.png"
            alt="Logo website"
            className="w-24 md:w-48"
          />
        </div>
        <div className="my-3">
        <h4 className="text-xl font-bold text-white">Plataforma</h4>
        <p id="Inicio" className="my-4 cursor-pointer">
          <Link href="#Inicio">Inicio</Link>
        </p>
        <p id="Feacture" className="my-4 cursor-pointer">
          <Link href="#Feacture">Features</Link>
        </p>
        <p id="Nosotros" className="my-4 cursor-pointer">
          <Link href="#Nosotros">Nosotros</Link>
        </p>
        <p id="Practica" className="my-4 cursor-pointer">
          <Link href="#Practica">Práctica</Link>
        </p>
        <p id="Precios" className="my-4 cursor-pointer">
          <Link href="#Precios">Precios</Link>
        </p>
      </div>
        <div className="my-3 ">
          <h4 className="text-xl font-bold text-white">Help</h4>
          <p className="my-4">How we work</p>
          <p className="my-4">que pregunta tienes?</p>
          <p className="my-4">como pagar?</p>
          <p className="my-4">para que sirve</p>
        </div>
        <div className="my-3 ">
          <h4 className="text-xl font-bold text-white">Contactos</h4>
          <p className="my-4">+51 930 247 356</p>
          <p className="my-4">Arepouerto Ayacucho</p>
          <p className="my-4">Ayacucho - Peru</p>
        </div>
      </div>
    </footer>
  );
}
