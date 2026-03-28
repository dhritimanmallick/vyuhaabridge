import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articles = [
  {
    slug: 'cervical-cancer-screening-india',
    title: 'Cervical Cancer Screening in India: Why Mandatory Screening Is a Game Changer',
    subtitle: 'How policy-driven screening can transform early detection and save millions of lives',
    date: 'March 2026',
    readTime: '10 min read',
    tag: 'Public Health',
  },
  {
    slug: 'the-case-for-the-vertical-stack',
    title: 'The Case for the Vertical Stack',
    subtitle: 'Why owning hardware + software + AI is the winning play in diagnostics',
    date: 'March 2026',
    readTime: '8 min read',
    tag: 'Industry Insight',
  },
];

const Opinion = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Navbar />
    <main className="flex-1 bg-white pt-40">
      {/* Header */}
      <section className="bg-white pb-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-2">Perspectives</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Opinion</h1>
          <p className="text-slate-500 text-base max-w-2xl">
            Insights on diagnostics, deep-tech, and building at the intersection of hardware, software, and AI.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-6 max-w-4xl py-8">
        <div className="space-y-5">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/opinion/${a.slug}`}
              className="block group border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {a.tag}
                </span>
                <span className="text-sm text-slate-400">{a.date}</span>
                <span className="text-sm text-slate-400">·</span>
                <span className="text-sm text-slate-400">{a.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1">
                {a.title}
              </h2>
              <p className="text-slate-500 text-sm">{a.subtitle}</p>
              <span className="inline-block mt-3 text-teal-600 font-medium text-sm group-hover:underline">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Opinion;
