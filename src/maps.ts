import { JpegOptions, PngOptions, TiffOptions, WebpOptions } from 'sharp';
import { DEFAULT_JPEG, DEFAULT_PNG, DEFAULT_TIFF, DEFAULT_WEBP } from './options';
import { GenericMimeOutput, InputMimes, MimeOutput } from './types';

export function mimeMapFactory(mimes: GenericMimeOutput[]): Map<string, GenericMimeOutput> {
  const map: any[] = mimes.map(mime => ([
    mime.input.mime,
    {
      input: mime.input,
      output: mime.output,
      convertRequired: mime.convertRequired,
    }
  ]));
  return new Map(map);
}

export const mimeMap: Map<InputMimes, MimeOutput> = new Map([
  [
    'application/pdf',
    {
      input: {mime: 'application/pdf', ext: 'pdf'},
      output: {mime: 'image/jpeg', ext: 'jpeg'},
      convertRequired: true,
    }
  ],
  [
    'image/jpeg',
    {
      input: {mime: 'image/jpeg', ext: 'jpeg'},
      output: {mime: 'image/webp', ext: 'webp'},
      convertRequired: false,
    }
  ],
  [
    'image/png',
    {
      input: {mime: 'image/png', ext: 'png'},
      output: {mime: 'image/webp', ext: 'webp'},
      convertRequired: false,
    }
  ],
  [
    'image/svg+xml',
    {
      input: {mime: 'image/svg+xml', ext: 'svg'},
      output: {mime: 'image/webp', ext: 'webp'},
      convertRequired: true,
    }
  ],
  [
    'image/gif',
    {
      input: {mime: 'image/gif', ext: 'gif'},
      output: {mime: 'image/webp', ext: 'webp'},
      convertRequired: true,
    }
  ],
  [
    'image/webp',
    {
      input: {mime: 'image/webp', ext: 'webp'},
      output: {mime: 'image/webp', ext: 'webp'},
      convertRequired: false,
    }
  ],
  [
    'image/tiff',
    {
      input: {mime: 'image/tiff', ext: 'tiff'},
      output: {mime: 'image/tiff', ext: 'tiff'},
      convertRequired: false,
    }
  ],
]);

export const outputOptionsMap: Map<string, PngOptions | JpegOptions | WebpOptions | TiffOptions> = new Map([
  [ 'jpeg', DEFAULT_JPEG ],
  [ 'webp', DEFAULT_WEBP ],
  [ 'png', DEFAULT_PNG ],
  [ 'tiff', DEFAULT_TIFF ],
]);

export const thumbSizeMap: Map<string, {width: number; height: number;}> = new Map([
  [ 'xs', { width: 75, height: 75 } ],
  [ 'sm', { width: 125, height: 125 } ],
  [ 'md', { width: 250, height: 250 } ],
  [ 'lg', { width: 500, height: 500 } ],
]);
