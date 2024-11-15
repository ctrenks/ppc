import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { message: "Verification token is required" },
      { status: 400 }
    );
  }

  try {
    const newsletter = await prisma.newsletter.findFirst({
      where: {
        verificationToken: token,
        verified: 0,
      },
    });

    if (!newsletter) {
      return NextResponse.json(
        { message: "Invalid or expired verification token" },
        { status: 400 }
      );
    }

    await prisma.newsletter.update({
      where: {
        id: newsletter.id,
      },
      data: {
        verified: 1,
        verificationToken: null, // Clear the token after verification
      },
    });

    // Redirect to a success page
    return NextResponse.redirect(new URL('/newsletter-verified', request.url));
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { message: "Failed to verify email" },
      { status: 500 }
    );
  }
} 