import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Elementary Japanese (Genki I Note Unit 6-10)',
  description: 'Japanese language notes from Genki I (Units 6-10)',
};

export default function Japanese2Page() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/fa94c93dd728483c961e6fc5a3ab8ff7" 
      />
    </div>
  );
} 