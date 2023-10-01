import { Store } from "@prisma/client";
import { create } from "zustand";

type DeleteStoreModalState = {
    store : Store | null; 
    open: boolean;
    toggleOpen: (store?: Store, open?: boolean) => void;
};

const useConfirmDelete = create<DeleteStoreModalState>((set) => ({
    store: null,
    open: false,
    toggleOpen: (store?: Store, isOpen?: boolean) =>
        set((state) => ({
            open: isOpen != undefined ? isOpen : !state.open,
            store: store ? store : state.store,
        })),
}));

export default useConfirmDelete;
