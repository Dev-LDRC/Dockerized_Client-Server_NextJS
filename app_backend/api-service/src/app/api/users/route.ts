import { NextRequest, NextResponse } from "next/server";
import { users } from "./faker_users";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    { users: users },
    { status: 200 }
  );
}