"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

type DeleteButtonProps = {
    storeid: string | null;
};

const DeleteButton = ({ storeid }: DeleteButtonProps) => {
    const auth = useAuth();
    const router = useRouter();

    const deleteStore = async (event: any) => {
        event.stopPropagation();

        let token = await auth.getToken();
        await axios.delete(`http://localhost:3000/api/stores/${storeid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        router.refresh();
        redirect('/');  
    };

    return (
        <Button
            size="sm"
            variant="destructive"
            onClick={(event) => deleteStore(event)}
        >
            <FaTrashAlt />
        </Button>
    );
};

export default DeleteButton;