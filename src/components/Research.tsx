"use client";
import { useState } from "react";
import { research } from "../data/portfolio";
import { ContentRenderer } from "../components/ContentRenderer";

export default function ResearchPaperPage({ params }: any) {
  const paper = research.find((p) => p.id === params.id);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  if (!paper) return <div className="text-white p-10">Paper not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-white">
      <h1 className="text-3xl font-bold mb-6">{paper.title}</h1>
      <p className="text-white/70 mb-10">{paper.description}</p>

      {/* SECTIONS */}
      <div className="space-y-10">
        <Section
          title="The Story Behind It"
          content={paper.storyBehindIt}
          image={paper.storyImage}
          onReadMore={() => openModal(paper.storyBehindIt)}
        />

        <Section
          title="Problem Statement"
          content={paper.problemStatement}
          onReadMore={() => openModal(paper.problemStatement)}
        />

        <Section
          title="Methodology"
          content={paper.methodology}
          image={paper.methodologyImage}
          onReadMore={() => openModal(paper.methodology)}
        />

        <Section
          title="Results & Impact"
          content={paper.result}
          image={paper.resultImage}
          onReadMore={() => openModal(paper.result)}
        />
      </div>

      {/* MODAL */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white/70 hover:text-white"
            >
              ✕
            </button>

            <ContentRenderer content={modalContent} />
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, content, image, onReadMore }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="text-white/70 line-clamp-3 mb-4">
        <ContentRenderer content={content} />
      </div>

      {image && <img src={image} alt={title} className="rounded-lg mb-4" />}

      <button
        onClick={onReadMore}
        className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition"
      >
        Read More
      </button>
    </div>
  );
}
