import { JpegOptions, PngOptions, ResizeOptions, SharpOptions, TiffOptions, WebpOptions } from 'sharp';

export type InputMimes = 'application/pdf'|'image/jpeg'|'image/png'|'image/webp'|'image/gif'|'image/tiff'|'image/svg+xml';
export type OutputMimes = 'image/jpeg'|'image/png'|'image/webp'|'image/tiff';
export type InputExtensions = 'pdf'|'jpeg'|'png'|'webp'|'gif'|'tiff'|'svg';
export type OutputExtensions = 'jpeg'|'png'|'webp'|'tiff';

export interface GenericMimeOutput {
  input: { mime: string, ext: string };
  output: { mime: string, ext: string };
  convertRequired: boolean;
}

export interface MimeOutput {
  input: { mime: InputMimes, ext: InputExtensions };
  output: { mime: OutputMimes, ext: OutputExtensions };
  convertRequired: boolean;
}

export interface ConversionOptions {
  sharp?: SharpOptions;
  resize?: ResizeOptions;
  convert?: PngOptions | JpegOptions | WebpOptions | TiffOptions;
}

export interface ConverterOptions extends ConversionOptions {
  inMime: InputMimes;
  outExt:  OutputExtensions;
}
