import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SecureSection from './components/SecureSection';
import BudgetingSection from './components/BudgetingSection';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SecureSection />
        <BudgetingSection />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
