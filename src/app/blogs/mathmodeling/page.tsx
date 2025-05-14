import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Numerical Methods for Math Modeling',
  description: 'Notes on numerical methods for mathematical modeling',
};

export default function MathModelingPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/16481666b45a80e68271cf39a20e509d?v=5c84e0e860894b23921b3a6c4c31f5cc" 
      />
    </div>
  );
} 