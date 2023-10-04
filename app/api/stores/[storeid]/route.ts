import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: { storeid: string } },
) {
    const { storeid } = params;

    const res = await prismadb.store.findUnique({
        where: {
            id: storeid,
        },
    });

    return NextResponse.json(res);
}

export async function PUT(
    request: Request,
    { params }: { params: { storeid: string } },
) {
    const { storeid } = params;
    const body = await request.json();

    const res = await prismadb.store.update({
        data: body,
        where: {
            id: storeid,
        },
    });

    return NextResponse.json(res)
}

export async function DELETE(
    _request: Request,
    { params }: { params: { storeid: string } },
) {
    const { storeid } = params;

    const res = await prismadb.store.delete({
        where: {
            id: storeid,
        },
    });

    return NextResponse.json(res);
}