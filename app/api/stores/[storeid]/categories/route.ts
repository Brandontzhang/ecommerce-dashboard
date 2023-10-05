import prismadb from "@/lib/prismadb";
import { Category } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    let newCategory: Category = await request.json();

    const res = await prismadb.category.create({
        data: newCategory,
    });

    return NextResponse.json(res);
}

export async function GET(
    _request: Request,
    { params }: { params: { storeid: string } },
) {
    const { storeid } = params;

    const res = await prismadb.category.findMany({
        where: {
            storeId: storeid,
        },
    });

    return NextResponse.json(res);
}