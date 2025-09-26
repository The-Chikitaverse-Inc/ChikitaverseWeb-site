import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const buscarParametros = request.nextUrl.searchParams
    const token = buscarParametros.get('token')
}