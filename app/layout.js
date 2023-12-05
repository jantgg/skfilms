import Head from "next/head";
import "./globals.css";

export const metadata = {
  title:
    "SK FILMS - Videografía y Fotografía Profesional en Gijón y Marbella | Carlos Villaverde",
  description:
    "SK FILMS, especializadOS en videografía y fotografía de alta calidad para tu negocio. Localizados en Gijón y Marbella. Servicios bajo demanda para capturar tus momentos más importantes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
     <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="SK FILMS, Videografía, Fotografía, Gijón, Marbella, Carlos Villaverde"
        />
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
 
      </Head>
      <body>{children}</body>
    </html>
  );
}
