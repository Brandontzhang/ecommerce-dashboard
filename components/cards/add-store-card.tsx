"use client"

import useNewStoreModal from "@/hooks/stores/useNewStoreModal";
import { Card, CardContent } from "../ui/card";
import { HiOutlinePlus } from "react-icons/hi";

const AddStoreCard = () => {
    const { toggleOpen } = useNewStoreModal()

    return (
        <Card
            onClick={() => toggleOpen(true)}
            className="border-dashed hover:cursor-pointer"
        >
            <CardContent className="flex h-full items-center justify-center">
                <span className="text-5xl">
                    <HiOutlinePlus />
                </span>
            </CardContent>
        </Card>
    );
};

export default AddStoreCard;
