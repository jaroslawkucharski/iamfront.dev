import type { ImageSource, RemoteImage } from '@typings/content';

const isRemoteImage = (image: ImageSource): image is RemoteImage => !('format' in image);

export const getImageProps = (image: ImageSource) =>
  isRemoteImage(image) ? { src: image.src, width: image.width, height: image.height } : { src: image };
