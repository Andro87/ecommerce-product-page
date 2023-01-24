import React, { useState, useCallback, useContext } from "react";

import styles from "./ProductImage.module.scss";

import { BasketContext } from "@/context/BasketContext";

import useEmblaCarousel from "embla-carousel-react";

import Prev from "svgrs/icon-previous.svg";
import Next from "svgrs/icon-next.svg";

import { ThumbImage } from "./ThumbImage/ThumbImage";

interface Props {
    readonly zoom?: string;
    readonly zoomBtn?: string;
    readonly zoomContainer?: string;
}

export const ProductImage: React.FunctionComponent<Props> = props => {
    const { zoom, zoomBtn, zoomContainer } = props;

    const { handleIsZoomed } = useContext(BasketContext);

    const [mainViewportRef, emblaApi] = useEmblaCarousel({
        loop: true
    });

    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        draggable: false
    });

    const [selected, setSelected] = useState<number>();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollToIndex = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const images = [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg"
    ];

    const thumbImages = [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg"
    ];

    return (
        <div className={styles.images_container}>
            <div
                className={`${styles.embla}  ${
                    zoomContainer && styles[zoomContainer]
                }`}
            >
                <div className={styles.embla__viewport} ref={mainViewportRef}>
                    <div className={styles.embla__container}>
                        {images.map((image, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div
                                    className={styles.embla__slide__inner}
                                    onClick={handleIsZoomed}
                                >
                                    <img
                                        className={styles.embla__slide__img}
                                        src={image}
                                        alt=" image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={`${styles.btn_container} ${
                        zoomBtn && styles[zoomBtn]
                    }`}
                >
                    <button
                        type="button"
                        title="previous"
                        className={styles.btn}
                        onClick={() => scrollPrev()}
                    >
                        <Prev />
                    </button>
                    <button
                        type="button"
                        title="next"
                        className={styles.btn}
                        onClick={() => scrollNext()}
                    >
                        <Next />
                    </button>
                </div>
            </div>
            <div className={`${styles.embla} ${styles.embla__thumb}`}>
                <div className={styles.embla__viewport} ref={thumbViewportRef}>
                    <div
                        className={`${styles.embla__container} ${
                            styles.embla__container__thumb
                        } ${zoom && styles[zoom]} `}
                    >
                        {thumbImages.map((image, index) => (
                            <ThumbImage
                                key={index}
                                onChoose={() => {
                                    scrollToIndex(index), setSelected(index);
                                }}
                                image={image}
                                selectedImage={
                                    selected === index ? "selected" : ""
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
