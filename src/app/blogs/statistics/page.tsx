import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Mathematical Statistics',
  description: 'Notes on mathematical statistics',
};

export default function StatisticsPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/78bd803f7e3045939345826aae6f582d" 
      />
    </div>
  );
} 