// src/app/api/listen/route.ts
import { NextResponse } from 'next/server';

let dataStore: any[] = [];

export async function GET() {
  return NextResponse.json(dataStore);
}

export async function POST(req: Request) {
  const data = await req.json();
  dataStore.push(data);
  return NextResponse.json({ message: 'Data received successfully' });
}