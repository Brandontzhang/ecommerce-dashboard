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
import DeleteButton from "@/app/stores/[storeid]/delete-button";
import { Button } from "../ui/button";
import { FaPencilAlt } from "react-icons/fa";

type StoreCardProps = {
    store: Store;
};

const StoreCard = ({ store }: StoreCardProps) => (
    <Card>
        <CardHeader>
            <CardTitle>{store.name}</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter className="justify-end space-x-2">
            <DeleteButton storeid={store.id} />
            <Link href={`/settings/${store.id}`}>
                <Button size="sm">
                    <FaPencilAlt />
                </Button>
            </Link>
        </CardFooter>
    </Card>
);

export default StoreCard;
