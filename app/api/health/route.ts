import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'notification-client'
    })
  } catch (error) {
    return NextResponse.json({
      status: 'unhealthy',
      error: 'Health check failed'
    }, { status: 500 })
  }
}