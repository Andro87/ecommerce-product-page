import React, { useContext } from "react";

import styles from "./CartContainer.module.scss";

import { BasketContext } from "@/context/BasketContext";

import Delete from "svgrs/icon-delete.svg";

interface Props {
    readonly onCheckOut: () => void;
}

export const CartContainer: React.FunctionComponent<Props> = props => {
    const { onCheckOut } = props;
    const { numberOfItems, isAddedToCart, clearCart } =
        useContext(BasketContext);

    function totalPrice(numberOfItems: number) {
        return numberOfItems * 125;
    }

    return (
        <div className={styles.cart_container}>
            <h2>Cart</h2>

            {!isAddedToCart || numberOfItems === 0 ? (
                <p className={styles.empty_message}>Your cart is empty.</p>
            ) : (
                <div className={styles.cart}>
                    <div className={styles.cart_items}>
                        <img
                            src="./images/image-product-1-thumbnail.jpg"
                            alt="item"
                        />
                        <div className={styles.cart_info}>
                            <p>Fall Limited Edition Sneakers</p>
                            <p className={styles.price_info}>
                                $125 x {numberOfItems}
                                <span> ${totalPrice(numberOfItems)}</span>
                            </p>
                        </div>
                        <button
                            type="button"
                            title="clear cart"
                            className={styles.clear_btn}
                            onClick={clearCart}
                        >
                            <Delete />
                        </button>
                    </div>

                    <button
                        type="button"
                        title="checkout"
                        className={styles.btn_checkout}
                        onClick={() => onCheckOut()}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};
