import { create } from 'zustand';

type NewStoreModalState = {
    open: boolean
    toggleOpen: (open? : boolean) => void
}
const useNewStoreModal = create<NewStoreModalState>((set) => ({
    open: true,
    toggleOpen: (isOpen? : boolean) => set((state) => ({ open: isOpen != undefined ? isOpen : !state.open }))
}))

export default useNewStoreModal;