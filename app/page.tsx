import CatalougeSection from "../components/HomePage/CatalougeSection";
import EditorsPicks from "../components/HomePage/EditorsPicks";
import GamesAchivement from "../components/HomePage/GamesAchivement";
import HeroSection from "../components/HomePage/HeroSection";
import ProductGridSections from "../components/HomePage/ProductGridSections";
import ProductSlider from "../components/HomePage/ProductSlider";
import PromotionalSection from "../components/HomePage/PromotionalSection";
import PromotionalSectionTwo from "../components/HomePage/PromotionalSectionTwo";
import RecentUploads from "../components/HomePage/RecentUploads";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSlider />
      <PromotionalSection />
      <EditorsPicks />
      <ProductGridSections />
      <GamesAchivement />
      <PromotionalSectionTwo />
      <RecentUploads />
      <CatalougeSection />
    </>
  );
}
