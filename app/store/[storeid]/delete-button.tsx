"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"

type DeleteButtonProps = {
    token : string | null,
    storeid : string | null,
}

const DeleteButton = ({ token, storeid } : DeleteButtonProps) => {

    const deleteStore = async () => {
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