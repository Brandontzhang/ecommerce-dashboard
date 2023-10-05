import { create } from 'zustand';

type addCategoryModalState = {
    open: boolean;
    toggleOpen: () => void;
}

const useAddCategoryModal = create<addCategoryModalState>((set) => ({
    open: false,
    toggleOpen: () => set((state) => ({open: !state.open}))
}))

export default useAddCategoryModal;