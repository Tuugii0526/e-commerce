import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className="w-full min-w-[240px] max-w-[1200px]">
        {children}
        </div>
      </body>
    </html>
  );
}
