import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { Store } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = auth();

    const stores = await prismadb.store.findMany({
        where: {
            userId: userId as string,
        },
        orderBy: [{name : 'asc'}]
    });

    return NextResponse.json(stores);
}

export async function POST(request: Request) {
    let newStore: Store = await request.json();

    const res = await prismadb.store.create({
        data: {
            name: newStore.name,
            userId: newStore.userId,
        },
    });

    return NextResponse.json(res);
}