import { connectDB } from "@utils/database";
import { Prompt } from "@model/prompt";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag,
      prompt,
    });

    await newPrompt.save();

    return NextResponse.json(newPrompt, { status: 201 });
  } catch (error) {
    return NextResponse.json({error:"Failed to create a new prompt"}, { status: 500 });
  }
};
