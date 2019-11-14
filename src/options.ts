import {
  JpegOptions, PngOptions, ResizeOptions,
  SharpOptions, TiffOptions, WebpOptions
} from 'sharp';

export const DEFAULT_PDF_SHARP: SharpOptions = {
  pages: 1,
  page: 0,
};
export const DEFAULT_JPEG: JpegOptions = {
  quality: 80,
  progressive: true,
  chromaSubsampling: '4:4:4',
  optimiseScans: true,
};
export const DEFAULT_WEBP: WebpOptions = {
  quality: 80,
  alphaQuality: 80,
  nearLossless: true,
};
export const DEFAULT_PNG: PngOptions = {
  progressive: true,
  compressionLevel: 8,
  adaptiveFiltering: true,
  quality: 90,
};
export const DEFAULT_TIFF: TiffOptions = {
  quality: 90,
  compression: 'lzw',
};
export const DEFAULT_RESIZE: ResizeOptions = {
  fit: 'cover',
  position: 'entropy',
  withoutEnlargement: true,
};
export const DEFAULT_PDF_RESIZE: ResizeOptions = {
  width: 500,
  height: 900,
};
