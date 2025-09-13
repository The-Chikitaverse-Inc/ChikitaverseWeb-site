import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        title: 'Chikitaverse API',
        incorporated: 'The Chikitaverse Inc.',
        code: 200,
        games: {
            roblox: true,
            minecraft: false,
            chess: true
        }
    })
}