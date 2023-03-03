import base64url from "base64url";

export const createOgImage = ({
  title,
  categories,
  imageUrl,
  authorAndDate,
}: {
  title: string;
  categories: string;
  imageUrl: string;
  authorAndDate: string;
}) =>
  [
    // ACCOUNT PREFIX
    `https://res.cloudinary.com/denbpv9kp/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // Categories
    `l_text:Raleway_32:${e(categories)},co_rgb:4e3505,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_180,y_450`,

    // TITLE
    `l_text:Raleway_72_bold:${e(title)},co_rgb:4e3505,c_fit,w_800,h_240`,
    `fl_layer_apply,g_south_west,x_180,y_290`,

    // Author info
    `l_text:Raleway_36:${e(authorAndDate)},co_rgb:4e3505,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_180,y_190`,

    //  Blog image
    `l_fetch:${base64url(imageUrl)}`,
    `r_0:15:15:0,w_430,h_628,c_fill,q_100,bo_2px_solid_rgb:4e3505`,
    `fl_layer_apply,g_east,x_116,fl_no_overflow`,

    // BG
    `v1677883387/soplugged_images/og_images/blog_post_og_e6r01f.png`,
  ].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
