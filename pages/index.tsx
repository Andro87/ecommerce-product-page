import { ContextProvider } from "@/context/BasketContext";

import { Home } from "@/components";

export default function App() {
    return (
        <ContextProvider>
            <Home />
        </ContextProvider>
    );
}
