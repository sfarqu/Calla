import type { progressCallback } from "../tasks/progressCallback";
import { getBuffer } from "./getBuffer";
import { readBufferXml } from "./readBufferXml";

export async function getXml(path: string, onProgress?: progressCallback): Promise<HTMLElement> {
    const { buffer } = await getBuffer(path, onProgress);
    return readBufferXml(buffer);
}