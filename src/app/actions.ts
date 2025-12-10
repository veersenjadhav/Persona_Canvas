"use server";

import { generatePhotoCaption } from "@/ai/flows/generate-photo-caption";

/**
 * Generates a caption for a given image URL.
 * This server action fetches the image, converts it to a Base64 data URI,
 * and then calls the AI flow to generate a caption.
 * @param imageUrl The public URL of the image to generate a caption for.
 * @returns The generated caption as a string, or null if an error occurs.
 */
export async function generateCaptionAction(imageUrl: string): Promise<string | null> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.statusText}`);
      return null;
    }

    const imageBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(imageBuffer).toString('base64');
    const mimeType = response.headers.get('content-type') || 'image/jpeg';
    const dataUri = `data:${mimeType};base64,${base64}`;

    const result = await generatePhotoCaption({ photoDataUri: dataUri });
    return result.caption;
  } catch (error) {
    console.error("Error generating caption:", error);
    return null;
  }
}
