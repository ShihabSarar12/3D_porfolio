import { useParams } from "react-router-dom";
import { projects } from "../data/portfolio";
import { ContentRenderer } from "./ContentRenderer";
import { Code, Star, Download, Github, ExternalLink } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return <p className="text-white text-center py-20">Project not found</p>;

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#074387]">
      <div className="w-full max-w-7xl p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg space-y-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-linear-to-r ${project.color}`}>
            <Code className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h2 className="text-2xl font-semibold text-white">
                {project.name}
              </h2>
              <div className="flex items-center gap-4 text-white/70">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-5 h-5" />
                  <span>{project.stats.downloads || project.stats.users}</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 mt-2">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          {project.storyBehindIt && (
            <div className="space-y-2">
              <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 inline-block font-medium">
                The Story Behind It
              </div>
              <ContentRenderer content={project.storyBehindIt} />
            </div>
          )}

          {project.howIGotTheWork && (
            <div className="space-y-2">
              <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 inline-block font-medium">
                How I Got The Work
              </div>
              <ContentRenderer content={project.howIGotTheWork} />
            </div>
          )}

          {project.whatItDoes && (
            <div className="space-y-2">
              <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 inline-block font-medium">
                What It Does
              </div>
              <ContentRenderer content={project.whatItDoes} />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <a
          href="/"
          className="mt-6 inline-block py-3 px-6 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-all duration-200"
        >
          ← Back to Projects
        </a>
      </div>
    </div>
  );
}
