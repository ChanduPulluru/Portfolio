export const metadata = {
  title: "Chandu Pulluru | Portfolio",
  description:
    "Portfolio of Chandu Pulluru, Java Developer and Frontend Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}
