/**
 * Next's image optimizer rejects SVG with a 400 ("url" parameter is valid but
 * image type is not allowed) unless `images.dangerouslyAllowSVG` is enabled;
 * see next/dist/server/image-optimizer.js. `next build` never catches this,
 * because the optimizer only runs when the image endpoint is hit at request
 * time, so a broken logo ships silently.
 *
 * Vector art gains nothing from raster optimization, so the fix is to bypass
 * the optimizer for SVG sources rather than enabling dangerouslyAllowSVG,
 * which would let *any* SVG through the optimizer, a real concern, since SVG
 * can carry scripts and Next serves optimized images from our own origin.
 *
 * Pass the result to <Image unoptimized={...}> anywhere the src is data-driven
 * and might be an SVG (site logos, member logos).
 */
export function isSvg(src: string): boolean {
  return src.toLowerCase().endsWith(".svg");
}
