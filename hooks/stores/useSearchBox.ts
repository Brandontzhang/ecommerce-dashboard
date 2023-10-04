import { create } from "zustand";

type SearchBoxState = {
    value: string;
    setValue: (value: string) => void;
};

const useSearchBox = create<SearchBoxState>((set) => ({
    value: "",
    setValue: (value: string) => set((state) => ({ value: value })),
}));

export default useSearchBox;