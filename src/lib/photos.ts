const PHOTOS = [
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128070/%E0%A4%B8%E0%A4%BF%E0%A4%99%E0%A4%B2%E0%A4%BE_Singla_26_vr1glc.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128069/DSC06339_oxhxwd.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128068/SAGARMATHA_mh4ows.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128068/DSC06375_sgakd6.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128067/sfsgsgdj_copy_flmkdc.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128067/DSC08012_iuqagd.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128066/PATAN_hekbi0.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128066/culture_2_ch0cw3.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128066/culture_4_mtxbxj.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128065/%E0%A4%B8%E0%A4%BF%E0%A4%99%E0%A4%B2%E0%A4%BE_Singla_33_wmfjs7.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128065/%E0%A4%B8%E0%A4%BF%E0%A4%99%E0%A4%B2%E0%A4%BE_Singla_15_jzwjuv.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128064/WhatsApp_Image_2025-06-11_at_19.28.02_95950062_g2whdn.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128064/WhatsApp_Image_2025-06-11_at_19.28.03_a5f8e6df_bjamuu.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128063/5_1_mkc4mi.jpg',
  'https://res.cloudinary.com/rigmojzn/image/upload/v1786128063/WhatsApp_Image_2025-06-11_at_19.28.02_db0caf83_ve9ep6.jpg',
];

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Deterministically maps a seed string (album slug, story slug, gallery
 * index, etc.) to one of the real portfolio photos, and asks Cloudinary
 * to deliver it pre-cropped/optimized at the requested size. Mirrors the
 * old `picsum.photos/seed/{seed}/{w}/{h}` placeholder API so callers only
 * need to swap the URL builder.
 */
export function getPhotoUrl(seed: string, width: number, height: number): string {
  const photo = PHOTOS[hashSeed(seed) % PHOTOS.length];
  return photo.replace(
    '/image/upload/',
    `/image/upload/w_${width},h_${height},c_fill,g_auto,q_auto,f_auto/`,
  );
}
