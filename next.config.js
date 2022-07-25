/* eslint-disable max-len */
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "dummyimage.com",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
      "cdn.shopify.com",
      "media.graphcms.com",
      "unsplash.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
    ],
  },
  env: {
    // GOOGLE_API_KEY: "AIzaSyDjqMtZjTrCMfn7U4OHk00_wte02pcuaHs",
    GRAPHCMS_PROJECT_API:
      "https://api-ca-central-1.graphcms.com/v2/ckyxr4rbl0veh01ytedad2rya/master",
    GRAPHCMS_PREVIEW_SECRET: "OUR_SECRET",
    GRAPHCMS_PROD_AUTH_TOKEN:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzMzQ4MzksImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreXhyNHJibDB2ZWgwMXl0ZWRhZDJyeWEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjk5NDRjYjUtNjRiNC00YjUwLWJiMDQtZmFjYTkxYzg0NzU3IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.a13iYRXWXx4M0zkEBQ20yDPgsENKXaf-5RJuBi1euJs0XOHBkr_FvYkANBepQ9GMGOSnPknjFTb-dSfgNchSZzG5FJl-HhG77-yJXXT9DVjeOO3D4vDxn_XvO8vT3bkpLTcc8SI2wT0zCi5u5h3kF3y6MZuR-aajRG240dIAv9-byc3ELYTlNu4ssBmIh0SlACQXvkZV4CT5TsimWNxZ0U_oP6B6AFl2U4KlERv0MCIalUAHQ8H52tGGXYhqKlUdMyvGFjcHO1LMELWVRWTZs-lt8qSiHSx7vAs06XjPj5alCioa_NodmxFyEsiNp_RLn0KZWpv2RxDQysPPCMYDED1Ys_he9WD9crcg9k0QCBu3xDjMMloULvGbgycYQPeMeeF-Au0UrpYmIhgTkixPJL1HRdcsFAEyewS9VrYNh9VQtDNlUpUp601ApS3kG99m7FzlIS86WxQ63xCMB4dlSaKWssIhW5yLCOWIxbiQS9eHE5l2YHLiMnqvQF-denie0ynyE7i-slBRSm4jsnwa6zX_00XKVSux-KRXXKbFamk6NMexzfkis2OJ9bdDb5Nm1T4OhUYO0-DiQEkcJLtdkgbfG5fi_7ut9lmyNP7utSNy5LtOaOx2kj9SSSaPReAG4DdAsDrGr4621wwQcfQg9CTffVC_XTQeL_oIrtKsGmU",
    GRAPHCMS_DEV_AUTH_TOKEN:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDMzMzQ4MzksImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NreXhyNHJibDB2ZWgwMXl0ZWRhZDJyeWEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmIyZjY5M2YtYjQwOS00ZTgzLWE2NjktYjc4MWNjNjA2YmY5IiwianRpIjoiY2thNWo0djJmMDN3bTAxejNhMmN2ZXo0ZCJ9.xI6D6Vc2JB2YlB6AzkD2ayOMvD3BJ8Th6X6yLXWWzGJISE08yhm4H-TWwXa58s1GNcUYoSBq82q3ZMIsrm1INLpvX5S5Kdl05cYk39coHsNKwGIF1eHGsHHJbqhGs_oXXe128HkW03iiLYC3MSFkt0FMRZmJyXWoIP2GZxXjLSksuFbf_o4vhJZ-HTmHJiK48UFsZTH6a4FW8okktOoaOzQX9qqJSB18C-tN81U3fYmWjqJsCudqWa3tNSuDeqRz0BQwLqLrHUM9O-hKUDwOu2zxMpI31IemhZ6mqrDIrOXXJoUVL47Lopw_lxe_ycgKeSwVGXQ-K20qt8Zi5CTeJ79xvHYoboIT185t2qaQVV7wBWixqljHPjm6SCJ7cYJMYOVNzyMjxvZuEHigL-FFtDX5430N8edokPvGEt6F5Q7jGJC41oSTMwsFvm_SDTKgBovfAcMaOGgvjqxPO6qr0MYSKAFDSmqyrITP3zQMv3flOfGHwzp5d3Hp_iScqdQanwfe4XuZwvWv5iFxKkGtS3IxNOPGk2k0E8QwsgpiA7VxIL9j656--fbDvqPk3zKxA4CaZaiAdC84REB_DmNA7q6uw6inaIk4j93dBCKVSVB-A7gh_SnHW7VGaPH6Am4ycwRbgeU8IWmx40eOWyvmUa8uk_Oz5Q9OqeMToOXlDMo",
  },
  async redirects() {
    return [
      {
        source: "/merch",
        destination: "https://merch.soplugged.com/",
        permanent: true,
      },
    ];
  },
};
