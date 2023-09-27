import { create } from 'zustand';

type NewStoreModalState = {
    open: boolean
    toggleOpen: (open? : boolean) => void
}
const useNewStoreModal = create<NewStoreModalState>((set) => ({
    open: true,
    toggleOpen: (open? : boolean) => set((state) => ({ open: open ? open : !state.open }))
}))

export default useNewStoreModal;