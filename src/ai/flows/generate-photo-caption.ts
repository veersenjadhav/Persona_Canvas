'use server';

/**
 * @fileOverview This flow generates captions for photos using AI.
 *
 * - generatePhotoCaption - A function that generates a caption for a given photo.
 * - GeneratePhotoCaptionInput - The input type for the generatePhotoCaption function.
 * - GeneratePhotoCaptionOutput - The return type for the generatePhotoCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePhotoCaptionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'    ),
});
export type GeneratePhotoCaptionInput = z.infer<typeof GeneratePhotoCaptionInputSchema>;

const GeneratePhotoCaptionOutputSchema = z.object({
  caption: z.string().describe('A generated caption for the photo.'),
});
export type GeneratePhotoCaptionOutput = z.infer<typeof GeneratePhotoCaptionOutputSchema>;

export async function generatePhotoCaption(input: GeneratePhotoCaptionInput): Promise<GeneratePhotoCaptionOutput> {
  return generatePhotoCaptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePhotoCaptionPrompt',
  input: {schema: GeneratePhotoCaptionInputSchema},
  output: {schema: GeneratePhotoCaptionOutputSchema},
  prompt: `You are an expert photographer and caption writer.  You are writing a caption for a photo.

Write a concise and engaging caption for the following photo:

{{media url=photoDataUri}}`,
});

const generatePhotoCaptionFlow = ai.defineFlow(
  {
    name: 'generatePhotoCaptionFlow',
    inputSchema: GeneratePhotoCaptionInputSchema,
    outputSchema: GeneratePhotoCaptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
