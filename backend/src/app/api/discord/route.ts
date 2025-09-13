import { NextRequest, NextResponse } from "next/server";

function code403(request: NextRequest) {
    const authHeader = request.headers.get('key')

    if (!authHeader || authHeader !== `Bearer ${process.env.KEY}`) {
        return NextResponse.json({
            error: 'Acesso não autorizado',
            code: 403
        })
    }

    return null
}

export async function GET(request: NextRequest) {
    const middlewareResponse = code403(request)
    if (middlewareResponse) { 
        return middlewareResponse 
    }

    try {
        const response = await fetch('https://discordapp.com/api/guilds/1311765282389360650/widget.json', {
            headers: {
                'User-Agent': 'Next.js Proxy',
            }
        })
        
        if (!response.ok) {
            throw new Error(`Erro na Api externa: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        return NextResponse.json({
            serveData: data,
        })
    } catch (error) {
        //Todo: Corrijir o erro 403 da bagaçera
    }
}