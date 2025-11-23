import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: "SPOTT",
  description: "EVENT MANAGEMENT PLATFORM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        
        {/* Header */}
        <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
        {/* glow */}
        <div></div>
        <div className="relative z-10">{children}</div>
        
        {/* Footer */}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
