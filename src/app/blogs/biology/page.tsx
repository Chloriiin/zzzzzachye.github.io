import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Intro to modern biology II',
  description: 'Notes on introduction to modern biology',
};

export default function BiologyPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/5fb233347e4440c79771632d2f541071" 
      />
    </div>
  );
} 