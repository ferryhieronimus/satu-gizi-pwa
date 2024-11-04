import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/configs/db";

export async function POST(req: Request) {
  try {
    const { email, password, passphrase } = await req.json();

    if (passphrase !== process.env.PASSPHRASE) {
      return NextResponse.json(
        { error: "Invalid passphrase" },
        { status: 401 }
      );
    }

    // check if email is already taken
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Success Register user", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create user" },
      {
        status: 500,
      }
    );
  }
}
