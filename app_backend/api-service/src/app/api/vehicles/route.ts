import { NextRequest, NextResponse } from "next/server";
import { vehicles } from "./faker_vehicle";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    { vehicles: vehicles },
    { status: 200 }
  );
}