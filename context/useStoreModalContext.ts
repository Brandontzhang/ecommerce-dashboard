import { useContext } from "react"
import { StoreModalContext } from "./StoreModalContext"

export const useStoreModalContext = () => {
    const storeModalContext = useContext(StoreModalContext)

    if (!storeModalContext) {
        throw new Error(
            "Store Modal Context must be used within the Store Modal Provider"
        )
    }

    return storeModalContext;
}
