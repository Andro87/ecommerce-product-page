import styles from "./Main.module.scss";

import { ProductInfo, ProductImage } from "./index";

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <ProductImage />
                <ProductInfo />
            </div>
        </main>
    );
};
