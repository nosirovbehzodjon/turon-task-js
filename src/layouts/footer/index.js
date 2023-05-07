import logo from "@/src/assets/images/logo.svg";
import { Button } from "@/src/components";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="container">
            <div className="flex justify-between items-center py-2">
                <div>
                    <Image src={logo} alt={"logo"} height={60} width={160} />
                    <p></p>
                </div>
                <Button type={"secondBtn"}>Our Team</Button>
            </div>
        </footer>
    );
};
export default Footer;
