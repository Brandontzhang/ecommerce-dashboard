import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params } : { params : {storeid : string}}) {
    const { storeid } = params;

    const res = await prismadb.store.delete({
        where: {
            id: storeid,
        },
    });

    return NextResponse.json(res);
}