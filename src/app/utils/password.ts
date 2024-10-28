"use server";
import { hash } from "@node-rs/argon2";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await hash(password);
  } catch {
    throw new Error("Hashing failed");
  }
};
