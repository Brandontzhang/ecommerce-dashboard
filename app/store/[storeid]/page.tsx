export default async function StorePage({ params } : { params : { storeid: string}}) {

    return (
        <>
            <span>Viewing page for: {params.storeid}</span>
        </>
    )
}