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
    `l_text:Raleway_32:${e(categories)},co_rgb:808080,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_95,y_460`,

    // TITLE
    `l_text:Raleway_80_bold:${e(title)},co_rgb:4e3505,c_fit,w_740,h_240`,
    `fl_layer_apply,g_south_west,x_93,y_270`,

    // Author info
    `l_text:Raleway_36:${e(authorAndDate)},co_rgb:4e3505,c_fit,w_1400`,
    `fl_layer_apply,g_south_west,x_95,y_190`,

    //  Blog image
    `l_fetch:${base64url(imageUrl)}`,
    `r_15,w_430,h_628,c_fill,q_100,bo_2px_solid_rgb:4e3505`,
    `fl_layer_apply,g_east,x_116,fl_no_overflow`,

    // BG
    `v1677887696/soplugged_images/og_images/og_blog_coehpb.png`,
  ].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
