import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

// Todo: create form page for updating (will be a client component)

export default async function SettingsPage({
    params,
}: {
    params: { storeid: string };
}) {
    const user = auth();
    const token = await user.getToken();
    const { storeid } = params;
    const store = await axios.get(
        `http://localhost:3000/api/stores/${storeid}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    return (
        <>
            <section className="flex w-full flex-row border-b border-b-slate-300 p-4">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">Settings</h1>
                    <p className="text-gray-500">Manage Store preferences</p>
                </div>
                <Button size="sm" variant="destructive" className="ml-auto">
                    <FaTrashAlt />
                </Button>
            </section>
        </>
    );
}