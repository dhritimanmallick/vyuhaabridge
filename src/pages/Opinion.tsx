import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articles = [
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
    <main className="flex-1 bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-3">Perspectives</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Opinion</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Insights on diagnostics, deep-tech, and building at the intersection of hardware, software, and AI.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-6 max-w-4xl py-16">
        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/opinion/${a.slug}`}
              className="block group border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-teal-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {a.tag}
                </span>
                <span className="text-sm text-slate-400">{a.date}</span>
                <span className="text-sm text-slate-400">·</span>
                <span className="text-sm text-slate-400">{a.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                {a.title}
              </h2>
              <p className="text-slate-500">{a.subtitle}</p>
              <span className="inline-block mt-4 text-teal-600 font-medium text-sm group-hover:underline">
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
