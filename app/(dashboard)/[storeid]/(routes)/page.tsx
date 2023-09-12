import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { use } from "react";

type DashboardPageProps = {
    children: React.ReactNode;
    params: { storeid: string };
};
const DashboardPage = async ({ children, params }: DashboardPageProps) => {
    const { storeid } = params;
    const { userId } = auth();

    if (!userId) {
        redirect("/");
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: storeid,
            userId,
        },
    });

    return (
        <div>
            {store?.name}
            {children}
        </div>
    );
};

export default DashboardPage;
