import { AddCategoryModal } from "@/components/modals/add-category-modal";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Layout({
    children,
    params
}: {
    children: React.ReactNode;
    params: {
        storeid: string
    }
}) {
    const user = auth();

    if (!user.userId) {
        redirect("/sign-in");
    }

    const token = await user.getToken();

    const { data: store } = await axios(`http://localhost:3000/api/stores/${params.storeid}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    const { data: categories } = await axios(`http://localhost:3000/api/stores/${params.storeid}/categories`, {
        headers: { Authorization: `Bearer ${token}`}
    })

    return (
        <>
            <AddCategoryModal userId={user.userId} store={store} />
            {children}
        </>
    );
}

