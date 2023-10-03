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
import { RiSettings4Fill } from "react-icons/ri";
import { ToggleDeleteModalButton } from "../modals/delete-store-modal";

type StoreCardProps = {
    store: Store;
};

const StoreCard = ({ store }: StoreCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{store.name}</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter className="justify-end space-x-2">
                <ToggleDeleteModalButton store={store} />
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
