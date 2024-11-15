import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { Prisma as PrismaClient } from "@prisma/client";
import { sendVerificationEmail } from "@/lib/nodemailer";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { email, siteId } = await request.json();

    // Basic validation
    if (!email || !siteId) {
      return NextResponse.json(
        { message: "Email and siteId are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    console.log(verificationToken);
    console.log(email);
    console.log(siteId);

    // Create new newsletter subscription
    const casino = await prisma.casino_p_casinos.findUnique({
      where: {
        id: 1350,
      },
    });
    console.log(casino);
    await prisma.newsletter.create({
      data: {
        email,
        siteId,
        verificationToken,
      },
    });

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json(
      { message: "Please check your email to verify your subscription" },
      { status: 201 }
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "PrismaClientKnownRequestError"
    ) {
      const prismaError = error as PrismaClient.PrismaClientKnownRequestError;
      if (prismaError.code === "P2002") {
        return NextResponse.json(
          { message: "This email is already subscribed" },
          { status: 400 }
        );
      }
    }

    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
