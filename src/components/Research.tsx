
import { useParams } from "react-router-dom";
import { research } from "../data/portfolio";
import { FileText, Github, Users, TrendingUp, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ResearchPaperPage() {
  const { id } = useParams();
  const paper = research.find((p) => p.id === Number(id));

    if (!paper)
        return (
            <div className='text-white p-10 bg-linear-to-br from-blue-900 to-blue-700 min-h-screen'>
                Paper not found.
            </div>
        );

    return (
        <div className='min-h-screen bg-linear-to-br from-blue-500 to-cyan-500 text-white py-16 px-6'>
            <button
                onClick={async () => {
                    localStorage.setItem('scrollTo', '#research');
                    window.history.back();
                }}
                className='text-blue-300 hover:text-blue-100 hover:underline mb-6 inline-block transition'
            >
                ← Back to Research
            </button>
      <h1 className="text-3xl font-bold mb-6">{paper.title}</h1>

      <ResearchCard paper={paper} />
    </div>
  );
}

function ResearchCard({ paper }: { paper: any }) {
  const formatAuthors = (authors: string, yourName: string) =>
    authors.split(",").map((author, i) => {
      const trimmed = author.trim();
      const bold = trimmed === yourName;
      return (
        <span key={i}>
          {i > 0 && ", "}
          {bold ? <strong className="text-white">{trimmed}</strong> : trimmed}
        </span>
      );
    });

  const sections = [
    { title: "The Story Behind It", content: paper.storyBehindIt },
    { title: "Problem Statement", content: paper.problemStatement },
    { title: "Methodology", content: paper.methodology },
    { title: "Results & Impact", content: paper.result },
  ];

  const renderHTML = (text: string) => {
    if (!text) return { __html: "" };

    let html = text;

    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img src="$2" alt="$1" class="rounded-lg my-4 w-full" />'
    );
    html = html.replace(/\n/g, "<br />");

    return { __html: html };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 rounded-2xl border border-white/10 shadow-lg text-white transition-all mb-8"
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`shrink-0 p-3 rounded-lg bg-linear-to-br ${paper.color} shadow-md`}
        >
          <FileText className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                {paper.type}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-yellow-500/20 text-white">
                <Award className="w-3 h-3" />
                <span>Rank: {paper.rank}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-green-500/20 text-white">
                <Star className="w-3 h-3" />
                <span>IF: {paper.impactFactor}</span>
              </span>
            </div>
            <span className="text-white/70">{paper.date}</span>
          </div>

          <h3 className="mb-2 text-white font-semibold">{paper.title}</h3>

          <div className="flex items-start gap-2 mb-2 text-white/70">
            <Users className="w-4 h-4 shrink-0 mt-1" />
            <p>{formatAuthors(paper.authors, paper.yourName)}</p>
          </div>

          <p className="italic text-white/70 mb-2">{paper.venue}</p>
        </div>
      </div>
      <p className="text-white/70 mb-4">{paper.description}</p>
      <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
        <div className="flex items-start gap-2">
          <TrendingUp className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-white/80">{paper.impact}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {paper.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-white/0 border border-white/0 text-white/70 hover:bg-white/10 hover:backdrop-blur-sm transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-6 mb-6">
        {sections.map((sec, i) => (
          <div key={i}>
            <SectionTitle title={sec.title} />
            <div
              className="mt-2 text-white/80 max-w-full wrap-break-word"
              dangerouslySetInnerHTML={renderHTML(sec.content)}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
        {paper.links?.code && (
          <a
            href={paper.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-white"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white font-medium">
      {title}
    </div>
  );
}
