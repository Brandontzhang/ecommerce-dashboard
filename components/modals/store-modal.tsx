"use client";
import React, { useState } from "react";
import { Modal } from "../ui/modal";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useStoreModalContext } from "@/context/useStoreModalContext";

export const StoreModal = () => {
	const { isOpen, setIsOpen } = useStoreModalContext();

    const closeDialog = () => {
        setIsOpen(false);
        console.log("closed")
    };
	
    return (
        <Modal
            title={"Create Store"}
            description={"Add a new store to manage products and categories"}
            isOpen={isOpen}
            onClose={closeDialog}
        >
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" />
            </div>
        </Modal>
    );
};
