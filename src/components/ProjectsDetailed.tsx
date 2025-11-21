import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    ExternalLink,
    Github,
    Star,
    Download,
    ChevronDown,
    ChevronUp,
    Code,
} from 'lucide-react';
import { projects } from '../data/portfolio';
import { ContentRenderer } from './ContentRenderer';

export function ProjectsDetailed() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='relative py-20 lg:py-32'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className='text-center mb-16'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className='inline-block px-4 py-2 mb-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-white drop-shadow-md'
                        >
                            Featured Work
                        </motion.span>
                        <h2 className='mb-4 text-white'>
                            Projects & Open Source
                        </h2>
                        <p className='text-white max-w-2xl mx-auto'>
                            Building tools and libraries that developers love to
                            use
                        </p>
                    </div>

                    <div className='space-y-8'>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function ProjectCard({
    project,
    index,
    isInView,
}: {
    project: any;
    index: number;
    isInView: boolean;
}) {
    const [expandedSections, setExpandedSections] = useState<Set<string>>(
        new Set()
    );

    const toggleSection = (section: string) => {
        const newExpanded = new Set(expandedSections);
        if (newExpanded.has(section)) {
            newExpanded.delete(section);
        } else {
            newExpanded.add(section);
        }
        setExpandedSections(newExpanded);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{
                scale: 1.03,
                y: -3,
                transition: {
                    duration: 0.25,
                    ease: 'easeOut',
                },
            }}
        >
            <div className='relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group'>
                <div className='absolute inset-0 bg-white/0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl' />

                <div className='relative z-10 p-8 space-y-6'>
                    <div className='flex items-start gap-4'>
                        <div
                            className={`shrink-0 p-3 rounded-lg bg-linear-to-r ${project.color}`}
                        >
                            <Code className='w-6 h-6 text-white' />
                        </div>
                        <div className='flex-1 space-y-2'>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                <h3 className='text-white font-medium text-xl'>
                                    {project.name}
                                </h3>
                                <div className='flex items-center gap-3 text-white/70'>
                                    <div className='flex items-center gap-1'>
                                        <Star className='w-4 h-4' />
                                        <span>{project.stats.stars}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Download className='w-4 h-4' />
                                        <span>
                                            {project.stats.downloads ||
                                                project.stats.users}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white/70'>
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className='px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {(project.storyBehindIt ||
                        project.howIGotTheWork ||
                        project.whatItDoes) && (
                        <div className='space-y-4'>
                            {project.storyBehindIt && (
                                <ExpandableSection
                                    title='The Story Behind It'
                                    content={project.storyBehindIt}
                                    isExpanded={expandedSections.has('story')}
                                    onToggle={() => toggleSection('story')}
                                />
                            )}
                            {project.howIGotTheWork && (
                                <ExpandableSection
                                    title='How I Got The Work'
                                    content={project.howIGotTheWork}
                                    isExpanded={expandedSections.has('work')}
                                    onToggle={() => toggleSection('work')}
                                />
                            )}
                            {project.whatItDoes && (
                                <ExpandableSection
                                    title='What It Does'
                                    content={project.whatItDoes}
                                    isExpanded={expandedSections.has('details')}
                                    onToggle={() => toggleSection('details')}
                                />
                            )}
                        </div>
                    )}

                    <div className='flex flex-wrap gap-3 pt-6 border-t border-white/10'>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                <Github className='w-4 h-4' />
                                <span>View Code</span>
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                <ExternalLink className='w-4 h-4' />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ExpandableSection({
    title,
    content,
    isExpanded,
    onToggle,
}: {
    title: string;
    content: string;
    isExpanded: boolean;
    onToggle: () => void;
}) {
    return (
        <div className='rounded-lg bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden transition-all'>
            <button
                onClick={onToggle}
                className='w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors'
            >
                <span className='text-white/80'>{title}</span>
                {isExpanded ? (
                    <ChevronUp className='w-5 h-5 text-white/70' />
                ) : (
                    <ChevronDown className='w-5 h-5 text-white/70' />
                )}
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                    >
                        <div className='p-4 pt-0 text-white/80 space-y-4'>
                            <ContentRenderer content={content} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
