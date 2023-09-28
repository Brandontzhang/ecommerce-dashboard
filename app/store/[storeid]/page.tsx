import { auth } from "@clerk/nextjs"
import DeleteButton from "./delete-button";

export default async function StorePage({ params } : { params : { storeid: string}}) {
    const user = auth();
    const token = await user.getToken();

    return (
        <>
            <span>Viewing page for: {params.storeid}</span>
            <DeleteButton token={token} storeid={params.storeid} />
        </>
    )
}