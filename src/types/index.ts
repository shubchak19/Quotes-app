export type QuoteObject = {
  quote: string;
  author: string;
};

export type ImageObject = {
  id: number;
  photographer: {
    name: string;
    url: string;
  };
  url: string;
};

export type PexelsData = {
  id: number;
  photographer: string;
  photographer_url: string;
  src: {
    landscape: string;
  };
}

export type FullQuoteObject = QuoteObject & {
 image: ImageObject;
}