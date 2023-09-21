"use client"
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./dialog";

type ModalProps = {
    title: string;
    description: string;
    children: React.ReactNode;
    open: boolean,
    toggleOpen: () => void
};

export const Modal = ({ title, description, children, open, toggleOpen }: ModalProps) => {

    const [client, setClient] = useState(false);
    
    useEffect(() => {
        setClient(true);
    }, []);
    
    if (!client) {
        return null;
    }

    return (
        <Dialog open={open} onOpenChange={toggleOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
