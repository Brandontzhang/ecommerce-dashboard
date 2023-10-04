import Link from "next/link";
import { Button } from "../ui/button";
import { RiSettings4Fill } from "react-icons/ri";
import { Store } from "@prisma/client";
import useSearchBox from "@/hooks/stores/useSearchBox";

type GoToStoreButtonProps = {
    store: Store;
};
const GoToStoreButton = ({ store }: GoToStoreButtonProps) => {
    const { setValue } = useSearchBox();

    return (
        <Link
            onClick={() => setValue(store.name.toLowerCase())}
            href={`/settings/${store.id}`}
        >
            <Button size="sm">
                <RiSettings4Fill />
            </Button>
        </Link>
    );
};

export default GoToStoreButton;
