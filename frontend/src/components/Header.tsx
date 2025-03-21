import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import Container from "./Container";
import Link from "next/link";
// import ThemeController from "./ThemeController";

export default function Header() {
    return (
        <header>
            <Container className="flex items-center justify-between">
                <nav>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <HiOutlineMenuAlt2 size={30} />
                        </li>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/products"}>Collections</Link></li>
                        <li><Link href={"/"}>New</Link></li>
                    </ul>
                </nav>
                <div>Vésta Mode</div>
                <div className="flex items-center space-x-5">
                    <MdOutlineDarkMode size={30} />
                    <div className="relative w-[2.95rem]">
                        <HiOutlineShoppingBag size={30} />
                        <div className="w-5 h-5 btn btn-circle bg-black text-white text-[11px] absolute top-0 right-0">
                            2
                        </div>
                    </div>
                    <div className="border h-8 w-8 rounded-full"></div>
                    <button className="btn btn-sm w-25">Login</button>
                </div>
            </Container>
        </header>
    );
}
