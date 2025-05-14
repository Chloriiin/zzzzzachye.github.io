import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Enzymatic kinetics',
  description: 'Notes on enzymatic kinetics',
};

export default function EnzymesPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/1c581666b45a8069a032fc301ba0885a" 
      />
    </div>
  );
} 