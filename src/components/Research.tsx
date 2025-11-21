import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FileText,
    ExternalLink,
    Github,
    Users,
    Calendar,
    TrendingUp,
} from 'lucide-react';
import { research } from '../data/portfolio';

export function Research() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id='research' className='relative py-20 lg:py-32'>
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
                            className='inline-block px-4 py-2 mb-2 rounded-full bg-linear-to-r from-blue-500/50 to-purple-600/50 border border-blue-500/60 font-bold text-white drop-shadow-md'
                        >
                            <span>Research Contributions</span>
                        </motion.span>
                        <h2 className='mb-4'>Published Research</h2>
                        <p className='text-muted-foreground max-w-2xl mx-auto'>
                            Advancing the field through cutting-edge research
                            and innovation
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {research.map((paper, index) => (
                            <motion.div
                                key={paper.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * index,
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    backdropFilter: 'blur(16px)',
                                    transition: {
                                        duration: 0.25,
                                        ease: 'easeOut',
                                    },
                                }}
                            >
                                <motion.div className='h-full p-6 rounded-2xl border border-border hover:border-white/20 transition-all flex flex-col'>
                                    <div className='flex items-start gap-3 mb-4'>
                                        <div className='shrink-0 p-3 rounded-lg bg-linear-to-br from-blue-500 to-purple-600'>
                                            <FileText className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <span className='inline-block px-2 py-1 rounded bg-muted text-muted-foreground mb-2'>
                                                {paper.type}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className='mb-3 line-clamp-2'>
                                        {paper.title}
                                    </h3>

                                    <div className='flex items-start gap-2 mb-3 text-muted-foreground'>
                                        <Users className='w-4 h-4 shrink-0 mt-0.5' />
                                        <p className='line-clamp-2'>
                                            {paper.authors}
                                        </p>
                                    </div>

                                    <div className='space-y-2 mb-4 text-muted-foreground'>
                                        <p className='italic'>{paper.venue}</p>
                                        <div className='flex items-center gap-2'>
                                            <Calendar className='w-4 h-4' />
                                            <span>{paper.date}</span>
                                        </div>
                                    </div>

                                    <p className='text-muted-foreground mb-4 grow'>
                                        {paper.description}
                                    </p>

                                    <div className='mb-4 p-3 rounded-lg bg-linear-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20'>
                                        <div className='flex items-start gap-2'>
                                            <TrendingUp className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                            <p className='text-foreground'>
                                                {paper.impact}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {paper.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className='px-2 py-1 rounded bg-muted text-muted-foreground'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex flex-wrap gap-3 pt-4 border-t border-border'>
                                        {paper.links.paper && (
                                            <a
                                                href={paper.links.paper}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center gap-2 px-3 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity'
                                            >
                                                <ExternalLink className='w-4 h-4' />
                                                <span>Paper</span>
                                            </a>
                                        )}
                                        {paper.links.code && (
                                            <a
                                                href={paper.links.code}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors'
                                            >
                                                <Github className='w-4 h-4' />
                                                <span>Code</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
