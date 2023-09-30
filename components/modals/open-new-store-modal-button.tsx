"use client";

import { Button } from "@/components/ui/button";
import useNewStoreModal from "@/hooks/stores/useNewStoreModal";
import React from "react";

export const openNewStoreModalButton = () => {
    const { toggleOpen } = useNewStoreModal();
    return <Button onClick={() => toggleOpen()}>Create New Store</Button>;
};
