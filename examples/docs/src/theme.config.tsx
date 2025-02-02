import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  chat: {
    link: "https://mee6.xyz/i/TvaDiyZ9hc", // Next.js discord server,
  },
  darkMode: true,
  docsRepositoryBase: "https://github.com/easy-node-pro/docs.easynodepro.com",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  faviconGlyph: "⚡",
  footer: {
    text: (
      <>
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>
            ⚡{" "}
            <a href="https://easynodepro.com" target="_blank" rel="noreferrer">
              EasyNodePro.com
            </a>{" "}
            ⚡ Blockchain Docs - ©{new Date().getFullYear()}
          </div>
        </div>
      </>
    ),
  },
  logo: (
    <span className="mr-2 hidden font-extrabold md:inline">
      EasyNodePro.com ⚡ Blockchain Docs
    </span>
  ),
  navigation: {
    next: true,
    prev: true,
  },
  primaryHue: 121,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      return <>{title}</>;
    },
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s  ⚡ docs.easynodepro.com ⚡",
      };
    }
    return {
      additionalLinkTags: [
        {
          href: "/192x192_App_Icon.png",
          rel: "apple-touch-icon",
          sizes: "192x192",
        },
        {
          href: "/192x192_App_Icon.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-96x96.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "#fff", name: "msapplication-TileColor" },
        { content: "/192x192_App_Icon.png", name: "msapplication-TileImage" },
        { content: "EasyNodePro.com ⚡ Blockchain Documents and Guides", name: "description" },
        {
          content: "Our documents site. We help everyone crypto like a pro!",
          name: "og:description",
        },
        { content: "summary_large_image", name: "twitter:card" },
        {
          content: "https://docs.easynodepro.com/twitter_card_800x418.jpg",
          name: "twitter:image",
        },
        { content: "docs.easynodepro.com", name: "twitter:site:domain" },
        { content: "https://docs.easynodepro.com", name: "twitter:url" },
        { content: "EasyNodePro.com ⚡ Blockchain Documents and Guides", name: "og:title" },
        {
          content: "https://docs.easynodepro.com/twitter_card_800x418.jpg",
          name: "og:image",
        },
        {
          content: "EasyNodePro.com ⚡ Blockchain Docs",
          name: "apple-mobile-web-app-title",
        },
      ],
      description: frontMatter.description || "⚡ docs.easynodepro.com ⚡",
      openGraph: {
        images: [
          {
            url:
              frontMatter.image ||
              "https://docs.easynodepro.com/twitter_card_800x418.jpg",
          },
        ],
      },
      titleTemplate: "%s  ⚡ docs.easynodepro.com ⚡",
      twitter: {
        cardType: "summary_large_image",
        site: "https://docs.easynodepro.com",
      },
    };
  },
};
