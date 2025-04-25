import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Navbar />
                </header>
                <div className="h-screen">{children}</div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
