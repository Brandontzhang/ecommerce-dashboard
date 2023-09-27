import { AddStoreModal } from "@/components/modals/add-store-modal";
import Navbar from "@/components/nav/navbar";
import { auth, currentUser } from "@clerk/nextjs";
import { AddNewStoreButton } from "./AddNewStoreButton";
import axios from "axios";

export default async function Page() {
    const user = auth();
    const { data: stores } = await axios('http://localhost:3000/api/stores', {headers : {"Authorization" : `Bearer ${await user.getToken()}`}})

    return (
        <>
            <AddStoreModal userId={user.userId as string} isOpen={stores.length == 0} />
            <Navbar /> 
            <AddNewStoreButton />
        </>
    )
}