// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('this jhhjis a middleware')
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.redirect(new URL('/y-2', request.url))
    }
    // return NextResponse.redirect(new URL('/about-2', request.url))
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}