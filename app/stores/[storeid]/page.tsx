import { auth } from "@clerk/nextjs"

export default async function StorePage({ params } : { params : { storeid: string}}) {
    const user = auth();

    return (
        <>
            <span>Viewing page for: {params.storeid}</span>
        </>
    )
}