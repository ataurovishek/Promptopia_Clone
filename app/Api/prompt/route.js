import { connectDB } from "@utils/database";
import { Prompt } from "@model/prompt";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const prompts = await Prompt.find({}).populate("creator");

    return NextResponse.json(prompts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch all prompts", { status: 500 });
  }
};
