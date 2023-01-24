import styles from "./ProductInfo.module.scss";

import Minus from "svgrs/icon-minus.svg";
import Plus from "svgrs/icon-plus.svg";
import Cart from "svgrs/icon-cart.svg";

import { BasketContext } from "@/context/BasketContext";
import { useContext } from "react";

export const ProductInfo = () => {
    const { numberOfItems, addItems, decreaseItems, handleIsAddedToCart } =
        useContext(BasketContext);

    return (
        <div className={styles.product_info}>
            <div className={styles.product_info_container}>
                <span>sneaker company</span>
                <h1>fall limited edition sneakers</h1>
                <p className={styles.product_description}>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                <div className={styles.price_container}>
                    <p>$125.00</p>
                    <span>50%</span>
                    <p>$250.00</p>
                </div>

                <div className={styles.btns_container}>
                    <div className={styles.items_number_container}>
                        <button
                            className={styles.btn}
                            title="minus"
                            type="button"
                            onClick={decreaseItems}
                        >
                            <Minus />
                        </button>

                        <p className={styles.numb_of_items}>{numberOfItems}</p>
                        <button
                            className={styles.btn}
                            title="plus"
                            type="button"
                            onClick={addItems}
                        >
                            <Plus />
                        </button>
                    </div>

                    <div
                        className={styles.add_to_cart_container}
                        onClick={handleIsAddedToCart}
                    >
                        <Cart />
                        <button
                            className={styles.btn_add}
                            title="add to cart"
                            type="button"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
