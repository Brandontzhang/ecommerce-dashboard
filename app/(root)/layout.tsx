import { AddStoreModal } from "@/components/modals/add-store-modal";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = auth();

    if (!user.userId) {
        redirect("/sign-in");
    }

    const { data: stores } = await axios("http://localhost:3000/api/stores", {
        headers: { Authorization: `Bearer ${await user.getToken()}` },
    });

    return (
        <>
            <AddStoreModal
                userId={user.userId as string}
                isOpen={stores.length == 0}
            />
            {children}
        </>
    );
}
