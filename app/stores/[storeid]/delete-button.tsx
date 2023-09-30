"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs"
import axios from "axios"

type DeleteButtonProps = {
    storeid : string | null,
}

const DeleteButton = ({ storeid } : DeleteButtonProps) => {
    const auth = useAuth();

    const deleteStore = async () => {
        let token = await auth.getToken();
        await axios.delete(`http://localhost:3000/api/stores/${storeid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    return (
        <Button onClick={deleteStore}>
            Delete Store
        </Button>
    )
}

export default DeleteButton;