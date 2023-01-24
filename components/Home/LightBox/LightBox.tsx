import React, { useContext } from "react";
import styles from "./LightBox.module.scss";
import Close from "svgrs/icon-close.svg";
import { ProductImage } from "../Main";
import { BasketContext } from "@/context/BasketContext";

export const LightBox: React.FunctionComponent = () => {
    const { handleLightbox } = useContext(BasketContext);

    return (
        <section className={styles.section_zoom} aria-label="lightbox">
            <button
                type="button"
                title="close"
                className={styles.btn_close_zoom}
                onClick={handleLightbox}
            >
                <Close />
            </button>
            <ProductImage
                zoom="zoom"
                zoomBtn="zoom_btn"
                zoomContainer="embla_zoom"
            />
        </section>
    );
};
