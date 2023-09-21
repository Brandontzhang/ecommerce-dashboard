import { create } from 'zustand';

type NewStoreModalState = {
    open: boolean
    toggleOpen: () => void
}
const useNewStoreModal = create<NewStoreModalState>((set) => ({
    open: true,
    toggleOpen: () => set((state) => ({ open: !state.open }))
}))

export default useNewStoreModal;