import Image from "next/image";
import React from "react";
import detail from "../../styles/pages/detail.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
const Details = ({ page }) => {
    const data = page.data;
    console.log(data);
    return (
        <main className="container py-3">
            <div className={detail.video}></div>
            <div className={detail.layout}>
                <Image
                    src={data.poster}
                    alt={"poster"}
                    width={200}
                    height={200}
                />
                <aside className={detail.description}>
                    <h3 className={detail.name}> {data.titleEn}</h3>
                    <p className={detail.desc}>{data.description}</p>
                    <p className={detail.year}>{data.year}</p>
                    <ul className={detail.countries}>
                        <span className={detail.paragraph}>countries: </span>
                        {data.countries.map((item) => {
                            return (
                                <li key={item.id} className={detail.country}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className={detail.gener}>
                        <span className={detail.paragraph}>genres: </span>
                        {data.genres.map((item) => {
                            return (
                                <li key={item.id} className={detail.country}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={detail.employees}>
                        {data.people.map((item1) => {
                            return (
                                <React.Fragment key={item1.post}>
                                    <h5 className={detail.paragraph}>
                                        {item1.post}
                                    </h5>
                                    <ul>
                                        {item1.employees.map((item2) => {
                                            return (
                                                <li key={item2.id}>
                                                    {item2.fullName},
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </aside>
            </div>
            <div className={detail.emp_img + " py-3"}>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {data.people.map((item1) => {
                        console.log(item1);
                        return (
                            <React.Fragment key={item1.post}>
                                {item1.employees.map((item2) => {
                                    console.log(item2.id);
                                    return (
                                        <React.Fragment key={item2.id}>
                                            {item2.photo ? (
                                                <SwiperSlide key={item2.id}>
                                                    <Image
                                                        className={
                                                            detail.slider_img
                                                        }
                                                        src={item2.photo}
                                                        width={200}
                                                        height={200}
                                                        key={item2.id}  
                                                        alt={"hi"}
                                                    />
                                                </SwiperSlide>
                                            ) : null}
                                        </React.Fragment>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
                </Swiper>
            </div>
        </main>
    );
};

export default Details;

export async function getServerSideProps(context) {
    const { id } = context.query;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_MAIN_URL}movie-detail?id=${id}`,
        {
            method: "GET",
            headers: {
                "secret-token": process.env.NEXT_PUBLIC_MAIN_TOKEN,
                "Content-Type": "application/json",
            },
        }
    );
    const data = await response.json();
    return {
        props: {
            page: data || null,
        },
    };
}
