import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Numerical methods to differential equation',
  description: 'Notes on numerical methods for differential equations',
};

export default function NumericalPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://yeastin.notion.site/ebd/18a81666b45a80f1935ed1ce55e33618" 
      />
    </div>
  );
} 