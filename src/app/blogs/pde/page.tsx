import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Analytical Methods to Partial Differential Equation (PDE)',
  description: 'Notes on analytical methods for partial differential equations',
};

export default function PdePage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/1d7ce29eec474669bcc1ac2c58e04d59" 
      />
    </div>
  );
} 