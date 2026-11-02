import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
