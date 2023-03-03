export const createOgImage = ({
  title,
  meta,
  imageUrl,
}: {
  title: string;
  meta: string;
  imageUrl: string;
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/denbpv9kp/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Raleway google font in dark brown
    `l_text:Raleway_72_bold:${e(title)},co_rgb:4e3505,c_fit,w_1000,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_180,y_200`,

    // META
    // Raleway, but smaller
    `l_text:Raleway_28:${e(meta)},co_rgb:4e350580,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_180,y_100`,

    // BG
    `v1677853410/soplugged_images/og_images/blog-post-og_gjr8q0.png`,
  ].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
