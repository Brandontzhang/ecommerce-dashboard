// 1. setup props for type children and params (object with field storeid)
// 2. check if the user is logged in, if not, push them to the login page
// 3. fetch the store data from the database, verify if it exists, toast error and redirect to home if not
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { UserButton, auth } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { Navbar } from "../../../components/navbar/Navbar";

type DashboardLayoutProps = {
    children: React.ReactNode;
    params: { storeid: string };
};
export default function DashboardLayout({
    children,
    params,
}: DashboardLayoutProps) {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }

    const storeData = prismadb.store.findFirst({
        where: {
            id: params.storeid,
            userId,
        },
    });
    if (!storeData) {
        toast.error("No store found");
        redirect("/");
    }
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
