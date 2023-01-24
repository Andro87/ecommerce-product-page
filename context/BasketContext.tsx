import { createContext, ReactNode, useState } from "react";

interface ContextInterface {
    readonly numberOfItems: number;
    readonly addItems?: () => void;
    readonly decreaseItems?: () => void;
    readonly isAddedToCart?: boolean;
    readonly handleIsAddedToCart?: () => void;
    readonly clearCart?: () => void;
    readonly isZoomed: boolean;
    readonly handleIsZoomed?: () => void;
    readonly handleLightbox?: () => void;
}

const BasketContext = createContext<ContextInterface>({
    numberOfItems: 0,
    isZoomed: false
});

type Props = {
    children: ReactNode;
};

const ContextProvider = (props: Props) => {
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    function addItems() {
        setNumberOfItems(prevValue => prevValue + 1);
    }
    function decreaseItems() {
        if (numberOfItems) {
            setNumberOfItems(prevValue => prevValue - 1);
        }
    }

    function clearCart() {
        setNumberOfItems(0);
    }

    function handleIsAddedToCart() {
        setIsAddedToCart(true);
    }

    function handleIsZoomed() {
        setIsZoomed(true);
        console.log("hello");
    }

    function handleLightbox() {
        setIsZoomed(false);
    }

    return (
        <BasketContext.Provider
            value={{
                numberOfItems,
                addItems,
                decreaseItems,
                isAddedToCart,
                handleIsAddedToCart,
                clearCart,
                isZoomed,
                handleIsZoomed,
                handleLightbox
            }}
        >
            {props.children}
        </BasketContext.Provider>
    );
};

export { BasketContext, ContextProvider };
