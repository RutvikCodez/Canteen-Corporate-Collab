import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      orderId,
      tableId,
      items,
      totalAmount,
      estimatedTime,
    } = body;

    if (!orderId || !tableId || !items?.length) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const order = await Order.create({
      orderId,
      tableId,
      items,
      totalAmount,
      estimatedTime,
    });

    return NextResponse.json(
      { message: "Order placed successfully", order },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to place order" },
      { status: 500 }
    );
  }
}
