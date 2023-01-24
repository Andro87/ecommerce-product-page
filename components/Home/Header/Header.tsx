import { useContext, useState } from "react";
import { BasketContext } from "@/context/BasketContext";

import styles from "./Header.module.scss";

import Menu from "svgrs/icon-menu.svg";
import Close from "svgrs/icon-close.svg";
import Logo from "svgrs/logo.svg";
import Cart from "svgrs/icon-cart.svg";

import { CartContainer } from "./CartContainer/CartContainer";

interface Props {
    readonly isMenuMobileOpen: boolean;
    readonly onMenuMobile: () => void;
}

export const Header: React.FunctionComponent<Props> = props => {
    const { isMenuMobileOpen, onMenuMobile } = props;

    const { numberOfItems, isAddedToCart } = useContext(BasketContext);

    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleCart() {
        setIsCartOpen(prevValue => !prevValue);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <button
                    type="button"
                    title="menu"
                    className={styles.menu_btn}
                    onClick={() => onMenuMobile()}
                >
                    {!isMenuMobileOpen ? <Menu /> : <Close />}
                </button>
                <Logo />

                <nav
                    className={`${styles.navigation} ${
                        isMenuMobileOpen && styles.navigation_mobile
                    }	`}
                >
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="*">
                                collections
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="*">
                                men
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="*">
                                women
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="*">
                                about
                            </a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className={styles.nav_link} href="*">
                                contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.cart_container}>
                    <div className={styles.cart_box}>
                        <div onClick={handleCart} className={styles.cart_icon}>
                            <Cart />
                        </div>
                        {isAddedToCart && numberOfItems > 0 && (
                            <p>{numberOfItems}</p>
                        )}
                    </div>

                    <img
                        src="./images/image-avatar.png"
                        alt="user "
                        className={styles.customer_img}
                    />
                </div>
                {isCartOpen && <CartContainer onCheckOut={handleCart} />}
            </div>
        </header>
    );
};
