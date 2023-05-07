import Image from "next/image";
import play from "../../assets/images/play.svg";
import card from "../../../styles/components/card/card.module.scss";
import Button from "../button";
import Link from "next/link";
const Card = ({ url, title, year, id, type }) => {
    switch (type) {
        case "card-show":
            return (
                <div className={card.cardShow}>
                    <Image src={url} alt={title} width={100} height={100} />
                    <div className={card.description}>
                        <Image src={play} alt="play" width={30} height={30} />
                        <h3>
                            {String(title).length > 16
                                ? String(title).substring(0, 15) + "..."
                                : String(title)}
                        </h3>
                        <p>{year}</p>
                        <Link href={`/details/${id}`} className={card.details}>
                            <Button>Details</Button>
                        </Link>
                    </div>
                </div>
            );
        default:
            return (
                <div className={card.card}>
                    <Image src={url} alt={title} width={100} height={100} />
                    <div className={card.description}>
                        <Image src={play} alt="play" width={30} height={30} />
                        <h3>
                            {String(title).length > 16
                                ? String(title).substring(0, 15) + "..."
                                : String(title)}
                        </h3>
                        <p>{year}</p>
                        <Link href={`/details/${id}`} className={card.details}>
                            <Button>Details</Button>
                        </Link>
                    </div>
                </div>
            );
    }
};
export default Card;
