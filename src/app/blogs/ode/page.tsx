import NotionEmbed from '../../../components/NotionEmbed';

export const metadata = {
  title: 'Analytical methods to ordinary differential equation (ODE)',
  description: 'Notes on analytical methods for ordinary differential equations',
};

export default function OdePage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Full-screen Notion embed */}
      <NotionEmbed 
        pageUrl="https://chloriiin.notion.site/ebd/53d2717bab964d6f909c0d9b3c051cf9" 
      />
    </div>
  );
} 