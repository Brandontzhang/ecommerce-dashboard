"use client";

import { Store } from "@prisma/client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { ToggleDeleteModalButton } from "../modals/delete-store-modal";
import GoToStoreButton from "./go-to-store-button";

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
                <GoToStoreButton store={store} />
            </CardFooter>
        </Card>
    );
};

export default StoreCard;
