import { NextResponse } from "next/server";
import Category from "@/models/Category";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  const data = await Category.find();
  return NextResponse.json(data);
}
