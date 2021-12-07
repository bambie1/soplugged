import dynamic from "next/dynamic";
import Script from "next/script";

import { PageWrapper } from "@/components/PageWrapper";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const MerchPage = () => {
  return (
    <>
      <Header />
      <PageWrapper center>
        <h1>merch</h1>
        <p className="noMargin">
          Normalize <b>#buyingblack</b>, but make it fashionable
        </p>
        <div id="collection-component-1622397974663"></div>
      </PageWrapper>
      <Footer />

      <Script
        id="shopify"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function () {
              var scriptURL =
                "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
              if (window.ShopifyBuy) {
                if (window.ShopifyBuy.UI) {
                  ShopifyBuyInit();
                } else {
                  loadScript();
                }
              } else {
                loadScript();
              }
              function loadScript() {
                var script = document.createElement("script");
                script.async = true;
                script.src = scriptURL;
                (
                  document.getElementsByTagName("head")[0] ||
                  document.getElementsByTagName("body")[0]
                ).appendChild(script);
                script.onload = ShopifyBuyInit;
              }
              function ShopifyBuyInit() {
                var client = ShopifyBuy.buildClient({
                  domain: "sopluggd.myshopify.com",
                  storefrontAccessToken: '630a642a7ed15e91527e35982fe8e4cb',
                });
                ShopifyBuy.UI.onReady(client).then(function (ui) {
                  ui.createComponent("collection", {
                    id: '267757355198',
                    node: document.getElementById('collection-component-1622397974663'),
                    moneyFormat: "%24%7B%7Bamount%7D%7D",
                    options: {
                      product: {
                        styles: {
                          product: {
                            "@media (min-width: 601px)": {
                              "max-width": "calc(25% - 20px)",
                              "margin-left": "20px",
                              "margin-bottom": "50px",
                              width: "calc(25% - 20px)",
                            },
                            img: {
                              height: "calc(100% - 15px)",
                              position: "absolute",
                              left: "0",
                              right: "0",
                              top: "0",
                            },
                            imgWrapper: {
                              "padding-top": "calc(75% + 15px)",
                              position: "relative",
                              height: "0",
                            },
                          },
                          title: {
                            "font-family": "Montserrat, sans-serif",
                            "font-weight": "normal",
                          },
                          button: {
                            "font-family": "Montserrat, sans-serif",
                            ":hover": {
                              "background-color": "#463005",
                            },
                            "background-color": "#4e3505",
                            ":focus": {
                              "background-color": "#463005",
                            },
                          },
                          price: {
                            "font-family": "Montserrat, sans-serif",
                          },
                          compareAt: {
                            "font-family": "Montserrat, sans-serif",
                          },
                          unitPrice: {
                            "font-family": "Montserrat, sans-serif",
                          },
                        },
                        buttonDestination: "modal",
                        contents: {
                          options: false,
                        },
                        text: {
                          button: "View product",
                        },
                        googleFonts: ["Montserrat"],
                      },
                      productSet: {
                        styles: {
                          products: {
                            "@media (min-width: 601px)": {
                              "margin-left": "-20px",
                            },
                          },
                        },
                      },
                      modalProduct: {
                        contents: {
                          img: false,
                          imgWithCarousel: true,
                          button: false,
                          buttonWithQuantity: true,
                        },
                        styles: {
                          product: {
                            "@media (min-width: 601px)": {
                              "max-width": "100%",
                              "margin-left": "0px",
                              "margin-bottom": "0px",
                            },
                          },
                          button: {
                            "font-family": "Montserrat, sans-serif",
                            ":hover": {
                              "background-color": "#463005",
                            },
                            "background-color": "#4e3505",
                            ":focus": {
                              "background-color": "#463005",
                            },
                          },
                          title: {
                            "font-family": "Montserrat, sans-serif",
                            "font-weight": "normal",
                            "font-size": "26px",
                            color: "#4c4c4c",
                          },
                          price: {
                            "font-family": "Montserrat, sans-serif",
                            "font-weight": "normal",
                            "font-size": "20px",
                            color: "#4c4c4c",
                          },
                          compareAt: {
                            "font-family": "Montserrat, sans-serif",
                            "font-weight": "normal",
                            "font-size": "17px",
                            color: "#4c4c4c",
                          },
                          unitPrice: {
                            "font-family": "Montserrat, sans-serif",
                            "font-weight": "normal",
                            "font-size": "17px",
                            color: "#4c4c4c",
                          },
                        },
                        googleFonts: ["Montserrat"],
                        text: {
                          button: "Add to cart",
                        },
                      },
                      option: {
                        styles: {
                          label: {
                            "font-family": "Montserrat, sans-serif",
                          },
                          select: {
                            "font-family": "Montserrat, sans-serif",
                          },
                        },
                        googleFonts: ["Montserrat"],
                      },
                      cart: {
                        styles: {
                          button: {
                            "font-family": "Montserrat, sans-serif",
                            ":hover": {
                              "background-color": "#463005",
                            },
                            "background-color": "#4e3505",
                            ":focus": {
                              "background-color": "#463005",
                            },
                          },
                        },
                        text: {
                          title: "Your Shopping Cart",
                          total: "Subtotal",
                          empty: "Oops! Your cart is empty.",
                          button: "Checkout",
                        },
                        contents: {
                          note: true,
                        },
                        popup: false,
                        googleFonts: ["Montserrat"],
                      },
                      toggle: {
                        styles: {
                          toggle: {
                            "font-family": "Montserrat, sans-serif",
                            "background-color": "#4e3505",
                            ":hover": {
                              "background-color": "#463005",
                            },
                            ":focus": {
                              "background-color": "#463005",
                            },
                          },
                        },
                        googleFonts: ["Montserrat"],
                      },
                    },
                  });
                });
              }
            })();
  `,
        }}
      />
    </>
  );
};

export default MerchPage;
