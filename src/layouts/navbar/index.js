import { navbarLeft, navbarRight } from "@/src/assets/constants/navbar";
import { Button } from "@/src/components";
import logo from "@/src/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import navbar from "../../../styles/layouts/navbar.module.scss";
import { useEffect, useState } from "react";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 200) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });
    return (
        <nav className={sticky ? navbar.navbarSticky : navbar.navbar}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className={navbar.left_side}>
                        <Image src={logo} alt={"logo"} />
                        <ul>
                            {navbarLeft.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <Link href={item.path}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <ul className={navbar.right_side}>
                        {navbarRight.map((item) => {
                            return (
                                <li key={item.name}>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            );
                        })}
                        <Button>log in</Button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
