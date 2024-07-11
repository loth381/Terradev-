import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap:4 lg:gap-20 lg:px-20">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width="200"
        height="25"
        className="mx-auto lg:mx-0"
      />
      <div className="flex gap-4 text-center">
        <Link href="#Inicio">Inicio</Link>
        <Link href="#Feacture">Feacture</Link>
        <Link href="#Nosotros">Nosotros</Link>
        <Link href="#Practica">Practica</Link>
        <Link href="#Precios">Precios</Link>
      </div>
    </div>
  );
};

export default Navbar;
