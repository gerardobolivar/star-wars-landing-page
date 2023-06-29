import InterestContentSection from "./Interest_Content_Section";
import './Interest_Content.css';
import data from "../data/Interest_Content_Data";

export default function Interest_Content() {
  return (
    <div className="interest-content">
      <InterestContentSection
        sectionTitle="Latest News + Features" 
        dataSection={data.news}/>

      <InterestContentSection
        sectionTitle="Latest Video"
        dataSection={data.latestVideo} />

      <InterestContentSection 
        sectionTitle="Explore More"
        dataSection={data.exploreMore}
      />
    </div>
  );
}