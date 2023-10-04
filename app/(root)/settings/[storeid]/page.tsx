import { ToggleDeleteModalButton } from "@/components/modals/delete-store-modal";
import { auth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import axios from "axios";

// Todo: create form page for updating (will be a client component)

export default async function SettingsPage({
    params,
}: {
    params: { storeid: string };
}) {
    const user = auth();
    const token = await user.getToken();
    const { storeid } = params;
    const { data: store }: { data: Store } = await axios.get(
        `http://localhost:3000/api/stores/${storeid}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return (
        <>
            <section className="flex w-full flex-row items-center border-b border-b-slate-300 p-4">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">Settings</h1>
                    <p className="text-gray-500">Manage Store preferences</p>
                </div>
                <ToggleDeleteModalButton className="ml-auto" store={store} />
            </section>
        </>
    );
}