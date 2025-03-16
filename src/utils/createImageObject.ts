import { ImageObject, PexelsData } from "@/types";

export default function createImageObject(obj: PexelsData): ImageObject {
  return {
    id: obj.id,
    photographer: {
      name: obj.photographer,
      url: obj.photographer_url,
    },
    url: obj.src.landscape,
  };
}
