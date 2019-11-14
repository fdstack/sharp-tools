import { ResizeOptions, Sharp } from 'sharp';
import sharp from 'sharp';
import { DEFAULT_RESIZE } from './options';

export function resize(file: Buffer, options: ResizeOptions = {}): Sharp {
  if (!options.width && !options.height) {
    throw new Error('A width or height must be specified');
  }
  return sharp(file).resize(null, null, { ...DEFAULT_RESIZE, ...options });
}
