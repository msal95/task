import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content } = body;

  const response = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return NextResponse.json(
    {
      data: response,
      message: "New Post Created successfully",
      status: 201,
    },
    { status: 201 }
  );
}
