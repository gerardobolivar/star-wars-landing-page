import InterestContentSection from "./Interest_Content_Section";
import './Interest_Content.css';
import data from "./Interest_Content_Data";

export default function Interest_Content() {
  return (
    <div className="interest-content">
      <InterestContentSection data = {data.news}/>
    </div>
  );
}