// layout.js
import Head from 'next/head';

const globalMeta = {
  siteName: "rpihomekit",
  siteUrl: "",
  siteLogo: "",
  email: "giocaizzi@gmail.com",
  description: "rpihomekit"
}

export default function RootLayout({
  title = globalMeta.siteName,
  description = globalMeta.description,
  canonicalUrl = globalMeta.siteUrl,
  children }) {
  return (
    <div>
      <Head>
        <title>{title} </title>
        <meta name="description" content={description} />
      </Head>
      <main>
        {children}
      </main>
    </div>
  );
}