import HeroSection from './components/herosection';
import RecentPostsSection from './components/recentpostsection';
import FeaturedWorksSection from './components/featuredworkssection';
import Footer from './components/footer';
import '../styles/style.css';

export default function Home() {
  return (
    <div className="bg-[#fef4f6]">
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
      <Footer />
    </div>
  );
}

