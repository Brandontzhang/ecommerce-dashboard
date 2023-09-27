import { UserButton, auth } from "@clerk/nextjs";
import ComboBox from "../ui/combobox";
import axios from "axios";
import { Store } from "@prisma/client";

const Navbar = async () => {
    const user = auth();

    const { data: stores } = await axios("http://localhost:3000/api/stores", {
        headers: { Authorization: `Bearer ${await user.getToken()}` },
    });
    return (
        <nav className="flex h-16 w-full border-b p-4">
            <ComboBox
                name="Stores"
                width="w-[400px]"
                data={stores.map((store : Store) => ({
                    value: store.id,
                    label: store.name,
                }))}
                url="store"
            />
            <div className="ml-auto">
                <UserButton afterSignOutUrl="/sign-in" />
            </div>
        </nav>
    );
};

export default Navbar;
