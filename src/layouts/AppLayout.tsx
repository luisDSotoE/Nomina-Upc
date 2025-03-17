import { Link, Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Logo from "../components/Logo";

export default function AppLayout() {
  return (
    <>
      <header className="p-5 bg-[#a4cf7c]">
        <div className="flex flex-col items-center justify-between mx-auto  max-w-screen-2xl lg:flex-row">
          <div className="w-64">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>

          <NavMenu />
        </div>
      </header>

      <section className="p-5 mx-auto max-w-screen-2xl">
        <Outlet />
      </section>

      <footer className="py-5">
        <p className="text-center">
          Todos los derechos reservados {new Date().getFullYear()} - UPC
        </p>
      </footer>
    </>
  );
}
