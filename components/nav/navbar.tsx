import { UserButton } from "@clerk/nextjs";
import ComboBox from "../ui/combobox";

const Navbar = () => {
    return (
        <nav className="flex h-16 w-full p-4 border-b">
            <ComboBox name="Stores" width="w-[400px]" data={[{value: "test", label: "test"}]} />
            <div className="ml-auto">
                <UserButton afterSignOutUrl="/sign-in" />
            </div>
        </nav>
    );
};

export default Navbar;