import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articleMap: Record<string, { src: string; title: string }> = {
  'the-case-for-the-vertical-stack': {
    src: '/hardware-software-play.html',
    title: 'The Case for the Vertical Stack',
  },
};

const OpinionArticle = () => {
  const { slug } = useParams();
  const article = slug ? articleMap[slug] : undefined;

  if (!article) return <Navigate to="/opinion" replace />;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1">
        <iframe
          src={article.src}
          title={article.title}
          className="w-full border-0"
          style={{ minHeight: 'calc(100vh - 80px)' }}
          onLoad={(e) => {
            const iframe = e.target as HTMLIFrameElement;
            try {
              const height = iframe.contentDocument?.documentElement?.scrollHeight;
              if (height) iframe.style.height = height + 'px';
            } catch {
              iframe.style.height = '4000px';
            }
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default OpinionArticle;
