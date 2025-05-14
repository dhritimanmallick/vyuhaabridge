
import AnimatedText from '../components/AnimatedText';

const News = () => (
  <section className="section-padding min-h-screen bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedText as="h1" text="News & Publications" className="text-3xl md:text-5xl font-bold mb-10" />
      <div className="mb-8 text-vyuhaa-600 font-semibold">
        <div>Awarded by NVIDIA, AstraZeneca @ Slush</div>
        <div>Upcoming: PLOS, JPI Publications, Conference talks</div>
      </div>
      <p className="text-gray-500">Latest news, scholarly articles, and demo videos will appear here.</p>
    </div>
  </section>
);

export default News;
