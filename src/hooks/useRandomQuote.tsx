import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToHistory } from "@/redux/slices/historySlice";
import { fetchImage, setImage } from "@/redux/slices/imageSlice";
import { fetchQuote } from "@/redux/slices/quoteSlice";
import debounce from "@/utils/debounce";
import getRandomNumber from "@/utils/getRandomNumber";
import { useCallback, useEffect, useState } from "react";

function useRandomQuote() {
  const [loading, setLoading] = useState(false);
  const { quoteObject, isLoading, error } = useAppSelector(
    (state) => state.quote
  );
  const {
    allImages,
    current: image,
    isLoading: imageLoading,
    error: imageError,
  } = useAppSelector((state) => state.image);
  const dispatch = useAppDispatch();

  const setRandomImage = useCallback(async () => {
    return await new Promise<void>((resolve, reject) => {
      if (!allImages.length) return reject("No images available");
      const newImage = allImages[getRandomNumber(allImages.length)];
      const img = new Image();
      img.src = newImage.url;
      img.onload = () => {
        dispatch(setImage(newImage));
        resolve();
      };
      img.onerror = (error) => reject(error);
    });
  }, [allImages, dispatch]);

  const getNewQuote = () => {
    setLoading(true);
    Promise.all([dispatch(fetchQuote()).unwrap(), setRandomImage()]).finally(
      () => setLoading(false)
    );
  };
  useEffect(() => {
    if (quoteObject && image)
      dispatch(addToHistory({ ...quoteObject, image: image }));
  }, [quoteObject, image, dispatch]);

  useEffect(() => {
    const debouncedFetchImage = debounce(() => dispatch(fetchImage()), 100);
    if (!allImages.length) debouncedFetchImage();
    return () => debouncedFetchImage.cancel();
  }, [dispatch, allImages]);

  useEffect(() => {
    if (allImages.length && !image) setRandomImage();
  }, [setRandomImage, allImages, image]);

  useEffect(() => {
    const debouncedFetchQuote = debounce(() => dispatch(fetchQuote()), 100);
    if (!quoteObject) debouncedFetchQuote();
    return () => debouncedFetchQuote.cancel();
  }, [dispatch, quoteObject]);

  return {
    quoteObject,
    image,
    isLoading: isLoading || imageLoading || loading,
    error: error || imageError,
    getNewQuote,
  };
}

export default useRandomQuote;
