import Image from "next/image";
import Button from "../button";
import image from "../../assets/images/showcase.jpg";
import showcase from "../../../styles/components/showcase/showcase.module.scss";
const Showcase = () => {
    return (
        <header className={showcase.header}>
            <Image src={image} alt={"showcase"} />
            <div>
                <h1>
                    I really love those extremely smart films that really make
                    you think.
                </h1>
                <article>
                    <Button>Get Started</Button>
                    <Button type={"secondBtn"}>live now</Button>
                </article>
            </div>
        </header>
    );
};
export default Showcase;
