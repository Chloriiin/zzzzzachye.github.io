import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Elementary Japanese (Genki I Note Unit 1-5)',
  description: 'Japanese language notes from Genki I (Units 1-5)',
};

export default function Japanese1Page() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/f39144688e164f47a29e322dd8b8dba8" 
      />
    </div>
  );
} 