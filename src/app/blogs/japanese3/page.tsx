import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Genki Note Unit 11-15',
  description: 'Japanese language notes from Genki (Units 11-15)',
};

export default function Japanese3Page() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/b029297198b9417ab56eb5fe8547dfa8" 
      />
    </div>
  );
} 