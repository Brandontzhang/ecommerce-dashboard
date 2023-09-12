"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useStoreModalContext } from "@/context/useStoreModalContext";
import { useEffect } from "react";

export default function SetupPage() {
    const { isOpen, setIsOpen } = useStoreModalContext();
    useEffect(() => {
        if (!isOpen) {
            setIsOpen(true);
        }
    }, [isOpen]);
    return (
        <StoreModal />
    );
}
