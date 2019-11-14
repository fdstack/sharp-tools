import sharp, { Sharp } from 'sharp';
import { mimeMap, outputOptionsMap } from './maps';
import { DEFAULT_JPEG, DEFAULT_PDF_RESIZE, DEFAULT_PDF_SHARP, DEFAULT_WEBP } from './options';
import { ConversionOptions, ConverterOptions } from './types';

//
// Creates Optimized webp format and optionally resize
//
export function webOptimize(file: Buffer, options: ConversionOptions = {}): Sharp {
  let pipeline = sharp(file);
  if (options.resize && (options.resize.width || options.resize.height)) {
    pipeline.resize(null, null, options.resize);
  }
  return pipeline.toFormat('webp', { ...DEFAULT_WEBP, ...options.convert });
}
//
// Convert PDF to jpeg
//
export function pdfToJpeg(file: Buffer, options: ConversionOptions = {},): Sharp {
  return sharp(file, { ...DEFAULT_PDF_SHARP, ...options.sharp })
    .resize(null, null, { ...DEFAULT_PDF_RESIZE, ...options.resize })
    .toFormat('jpeg', { ...DEFAULT_JPEG, ...options.convert });
}
//
// Convert to different format and optionally resize
//
export function convert(file: Buffer, options: ConverterOptions, mm = mimeMap): Sharp {
  if (!mm.has(options.inMime)) {
    throw new Error('Invalid mime type');
  }
  const defaultOptions = outputOptionsMap.get(options.outExt);
  if (!defaultOptions) {
    throw new Error('Invalid output type');
  }
  if (options.inMime === 'application/pdf') {
    const { resize, sharp, convert } = options;
    return pdfToJpeg(file, { resize, sharp, convert: convert });
  }
  let pipeline: Sharp = sharp();
  if (options.resize && (options.resize.width || options.resize.height)) {
    pipeline.resize(null, null, options.resize);
  }
  return pipeline.toFormat(options.outExt, { ...defaultOptions, ...options.convert });
}

