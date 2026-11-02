import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/content';
import { site } from '@/data/site';
import Home from '@/pages/Home';
import About from '@/pages/About';
import HowCanIHelp from '@/pages/HowCanIHelp';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import Disclaimer from '@/pages/Disclaimer';
import CookiePolicy from '@/pages/CookiePolicy';
import NotFound from '@/pages/NotFound';

const pageMetadata = {
  '/': {
    title: `${site.name} | Psychologist & Mental Wellness`,
    description: 'Explore compassionate support for anxiety, relationships, self-esteem, career, and personal growth with Nikhitha Chaudhary.',
  },
  '/about': {
    title: `About ${site.name} | Psychologist`,
    description: 'Learn about Nikhitha Chaudhary’s approach to compassionate psychological support and the values that shape her practice.',
  },
  '/how-can-i-help': {
    title: `Therapy and Support Areas | ${site.name}`,
    description: 'Explore support for anxiety, relationships, self-esteem, career questions, and personal growth.',
  },
  '/blog': {
    title: `Mental Wellness Journal | ${site.name}`,
    description: 'Read reflections on anxiety, relationships, self-esteem, career, and personal growth from Nikhitha Chaudhary.',
  },
  '/testimonials': {
    title: `Stories of Change | ${site.name}`,
    description: 'Read reflections shared by people about their experiences of personal growth and psychological support.',
  },
  '/contact': {
    title: `Contact ${site.name} | Enquiries and Sessions`,
    description: 'Get in touch with Nikhitha Chaudhary to ask a question or enquire about a session.',
  },
  '/faqs': {
    title: `Frequently Asked Questions | ${site.name}`,
    description: 'Find answers to common questions about sessions, confidentiality, fees, and getting started.',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${site.name}`,
    description: 'Read how this website handles contact enquiries and personal information.',
  },
  '/terms': {
    title: `Terms and Conditions | ${site.name}`,
    description: 'Review the terms for using this website and enquiring about psychological services.',
  },
  '/disclaimer': {
    title: `Disclaimer | ${site.name}`,
    description: 'Understand the limits of this website’s educational content and the emergency resources it provides.',
  },
  '/cookie-policy': {
    title: `Cookie Policy | ${site.name}`,
    description: 'Read information about cookies and similar technologies described for this website.',
  },
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const articleSlug = path.startsWith('/blog/') ? decodeURIComponent(path.slice('/blog/'.length)) : null;
    const article = articleSlug ? blogPosts.find((post) => post.slug === articleSlug) : null;
    const metadata = article
      ? { title: `${article.title} | ${site.name}`, description: article.excerpt }
      : pageMetadata[path] ?? {
          title: `Page Not Found | ${site.name}`,
          description: 'The page you requested could not be found. Return to the Nikhitha Chaudhary website home page.',
        };

    document.title = metadata.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', metadata.description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteMetadata />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-can-i-help" element={<HowCanIHelp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
