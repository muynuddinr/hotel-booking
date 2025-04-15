export const fileToBuffer = async (file: File): Promise<Buffer> => {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export const bufferToDataUrl = (buffer: Buffer, contentType: string): string => {
  return `data:${contentType};base64,${buffer.toString('base64')}`;
};