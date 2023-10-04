import AddStoreCard from "@/components/cards/add-store-card";
import StoreCard from "@/components/cards/store-card";
import { auth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = auth();

    if (!user.userId) {
        redirect("/sign-in");
    }

    const { data: stores } = await axios("http://localhost:3000/api/stores", {
        headers: { Authorization: `Bearer ${await user.getToken()}` },
    });

    return (
        <div className="m-10 grid grid-cols-2 gap-10 md:grid-cols-6">
            {stores.map((store: Store) => (
                <StoreCard key={store.id} store={store} />
            ))}
            <AddStoreCard />
        </div>
    );
}
