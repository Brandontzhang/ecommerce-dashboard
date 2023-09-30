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

type StoreCardProps = {
    store: Store;
};

const StoreCard = ({ store }: StoreCardProps) => (
    <Link href={`/settings/${store.id}`}>
        <Card>
            <CardHeader>
                <CardTitle>{store.name}</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>
                <DeleteButton storeid={store.id} />
            </CardFooter>
        </Card>
    </Link>
);

export default StoreCard;
