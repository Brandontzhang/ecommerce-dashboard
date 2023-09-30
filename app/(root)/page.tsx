import StoreCard from "@/components/cards/store-card";
import { auth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import axios from "axios";

export default async function Page() {
    const user = auth();

    const { data: stores } = await axios("http://localhost:3000/api/stores", {
        headers: { Authorization: `Bearer ${await user.getToken()}` },
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 m-10">
            {stores.map((store: Store) => (
                <StoreCard key={store.id} store={store} />
            ))}
        </div>
    );
}
