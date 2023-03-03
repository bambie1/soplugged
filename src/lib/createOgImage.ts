import base64url from "base64url";

export const createOgImage = ({
  title,
  authorName,
  categories,
  imageUrl,
  createdDate,
}: {
  title: string;
  authorName: string;
  authorImage: string;
  categories: string;
  imageUrl: string;
  createdDate: string;
}) =>
  [
    // ACCOUNT PREFIX
    `https://res.cloudinary.com/denbpv9kp/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // Categories
    `l_text:Raleway_28:${e(categories)},co_rgb:4e350580,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_180,y_440`,

    // TITLE
    `l_text:Raleway_72_bold:${e(title)},co_rgb:4e3505,c_fit,w_700,h_240`,
    `fl_layer_apply,g_south_west,x_180,y_280`,

    // Date
    `l_text:Raleway_28:${e(createdDate)},co_rgb:4e350580,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_180,y_220`,

    // Author info
    `l_text:Raleway_28:${e(authorName)},co_rgb:4e3505,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_180,y_170`,

    //  Blog image
    `l_fetch:${base64url(imageUrl)}`,
    `r_0:15:15:0,w_430,h_628,c_fill,q_100,bo_2px_solid_rgb:4e3505`,
    `fl_layer_apply,g_east,x_116,fl_no_overflow`,

    // BG
    `v1677876163/soplugged_images/og_images/blog_og_cddrpx.png`,
  ].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
