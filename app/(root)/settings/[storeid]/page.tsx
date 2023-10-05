import { ToggleDeleteModalButton } from "@/components/modals/delete-store-modal";
import { auth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import axios from "axios";
import { UpdateStoreForm } from "./update-store-form";
import SectionHeader from "@/components/ui/section-header";

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
        <main>
            <SectionHeader
                title={`${store.name} Settings`}
                description="Manage store preferences"
            >
                <ToggleDeleteModalButton className="ml-auto" store={store} />
            </SectionHeader>
            <section>
                <UpdateStoreForm className="mt-4" store={store} />
            </section>
        </main>
    );
}