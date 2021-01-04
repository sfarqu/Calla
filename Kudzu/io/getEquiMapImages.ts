import type { InterpolationType } from "../graphics2d/InterpolationType";
import {
    renderCanvasFace,
    renderCanvasFaces,
    renderImageBitmapFace,
    renderImageBitmapFaces
} from "../graphics2d/renderFace";
import type { CanvasTypes } from "../html/canvas";
import { hasImageBitmap } from "../html/canvas";
import type { progressCallback } from "../tasks/progressCallback";
import { splitProgress } from "../tasks/splitProgress";
import { getImageData } from "./getImageData";

export async function getEquiMapCanvases(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<CanvasTypes[]> {
    const splits = splitProgress(onProgress, [1, 6]);
    const imgData = await getImageData(path, splits.shift());
    console.log(imgData);
    return await renderCanvasFaces(renderCanvasFace, imgData, interpolation, maxWidth, splits.shift());
}

export async function getEquiMapImageBitmaps(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<ImageBitmap[]> {
    const splits = splitProgress(onProgress, [1, 6]);
    const imgData = await getImageData(path, splits.shift());
    return await renderImageBitmapFaces(renderImageBitmapFace, imgData, interpolation, maxWidth, splits.shift());
}

export const getEquipMaps = hasImageBitmap
    ? getEquiMapImageBitmaps
    : getEquiMapCanvases;