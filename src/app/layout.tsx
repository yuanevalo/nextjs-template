import Header from "@/components/Header";
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
                    <Header />
                </header>
                <div className="h-screen">{children}</div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
