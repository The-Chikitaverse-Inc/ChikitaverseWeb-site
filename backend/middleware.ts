import { NextResponse, NextRequest } from "next/server";

export function code403(request: NextRequest) {
    const key = request.headers.get('key')

    if (key !== process.env.KEYASSC) {
        return NextResponse.json({
            message: 'Acesso negado',
            code: 403,
        },
           { status: 403 }
        )
    }

  return NextResponse.next()
}

export const config = {
    matcher: [
        '/api/:path*',
        '/api/:path*/:path*'
    ]
}