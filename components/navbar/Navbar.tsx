import { UserButton, auth } from "@clerk/nextjs";
import { NavLinks } from "./NavLinks";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { StoreSelect } from "./StoreSelect";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

export const Navbar = async () => {
    const { userId } = auth();

    if (userId == null) {
        redirect("/sign-in");
    }
    
    const stores = await prismadb.store.findMany({
        where: {
            userId
        }
    })

    return (
        <nav className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSelect stores={stores} />
                <NavLinks className="mx-4"/>
                <div className="ml-auto">
                    <UserButton signInUrl="/sign-in" />
                </div>
            </div>
        </nav>
    );
};
