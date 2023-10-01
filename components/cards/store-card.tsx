"use client";

import { Store } from "@prisma/client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import useConfirmDelete from "@/hooks/stores/useConfirmDeleteModal";

type StoreCardProps = {
    store: Store;
};

const StoreCard = ({ store }: StoreCardProps) => {
    const { toggleOpen: confirmDelete } = useConfirmDelete();

    return (
        <Card>
            <CardHeader>
                <CardTitle>{store.name}</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter className="justify-end space-x-2">
                <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => confirmDelete(store)}
                >
                    <FaTrashAlt />
                </Button>
                <Link href={`/settings/${store.id}`}>
                    <Button size="sm">
                        <RiSettings4Fill />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default StoreCard;
