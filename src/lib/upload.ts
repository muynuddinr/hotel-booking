/**
 * Converts a File to Buffer for MongoDB storage
 */
export const fileToBuffer = async (file: File): Promise<Buffer> => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer;
};

/**
 * Converts a Buffer to base64 data URL for image display
 */
export const bufferToDataUrl = (buffer: Buffer, contentType: string): string => {
  return `data:${contentType};base64,${buffer.toString('base64')}`;
}; 