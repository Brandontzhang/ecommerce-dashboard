import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

type Store = {
    name: string,
    userId: string
}

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json(
            { error: "Unauthorized Error" },
            { status: 401 },
        );
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId: userId,
        },
    });

    return NextResponse.json(stores);
}

export async function POST(request : Request) {
    let newStore : Store = await request.json(); 

    const res = await prismadb.store.create({
        data: {
            name: newStore.name,
            userId: newStore.userId
        }
    });

    return NextResponse.json(res);
}