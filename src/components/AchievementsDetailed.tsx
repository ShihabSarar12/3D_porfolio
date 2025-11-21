import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    Trophy,
    Award,
    Star,
    Users,
    BookOpen,
    DollarSign,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import { achievements } from '../data/portfolio';
import { ContentRenderer } from './ContentRenderer';

const categoryIcons: Record<string, typeof Trophy> = {
    Research: BookOpen,
    Professional: Award,
    Community: Users,
    Competition: Trophy,
    Academic: Star,
    default: Award,
};

const categoryColors: Record<string, string> = {
    Research: 'from-blue-500 to-cyan-500',
    Professional: 'from-purple-500 to-pink-500',
    Community: 'from-green-500 to-emerald-500',
    Competition: 'from-orange-500 to-red-500',
    Academic: 'from-yellow-500 to-orange-500',
    default: 'from-blue-500 to-purple-600',
};

export function AchievementsDetailed() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
                            className='inline-block px-4 py-2 mb-2 rounded-full bg-white/10 border border-white/20 font-bold text-white drop-shadow-md'
                        >
                            Recognition & Awards
                        </motion.span>
                        <h2 className='mb-4 text-2xl text-white font-medium'>
                            Achievements
                        </h2>
                        <p className='text-white max-w-2xl mx-auto'>
                            Honored to be recognized for contributions to
                            technology and research
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {achievements.map((achievement, index) => (
                            <AchievementCard
                                key={achievement.id}
                                achievement={achievement}
                                index={index}
                                isInView={isInView}
                                expandedCard={expandedCard}
                                setExpandedCard={setExpandedCard}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function AchievementCard({
    achievement,
    index,
    isInView,
    expandedCard,
    setExpandedCard,
}: {
    achievement: any;
    index: number;
    isInView: boolean;
    expandedCard: string | null;
    setExpandedCard: (id: string | null) => void;
}) {
    const Icon = categoryIcons[achievement.category] || categoryIcons.default;
    const colorGradient =
        categoryColors[achievement.category] || categoryColors.default;

    const isExpanded = expandedCard === achievement.id;

    const toggleExpand = () => {
        setExpandedCard(isExpanded ? null : achievement.id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            <motion.div
                whileHover={{
                    backdropFilter: 'blur(16px)',
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' },
                }}
                className='h-full p-6 rounded-2xl bg-white/0 border border-white/0 backdrop-blur-none shadow-lg transition-all relative overflow-hidden group text-white'
            >
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200`}
                />

                <div className='relative z-10 flex flex-col h-full'>
                    <div className='flex items-start justify-between mb-4'>
                        <div
                            className={`p-3 rounded-xl bg-linear-to-br ${colorGradient}`}
                        >
                            <Icon className='w-6 h-6 text-white' />
                        </div>
                        <div className='flex flex-col items-end gap-2'>
                            <span className='px-3 py-1 rounded-full bg-white/20 text-white font-medium'>
                                {achievement.category}
                            </span>
                            {achievement.prize && (
                                <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-green-500/20 text-white'>
                                    <DollarSign className='w-3 h-3' />
                                    <span>{achievement.prize}</span>
                                </span>
                            )}
                        </div>
                    </div>

                    <h3 className='mb-2 text-white font-semibold'>
                        {achievement.title}
                    </h3>

                    <div className='mb-3 space-y-1'>
                        <p className='text-white/70'>
                            {achievement.organization}
                        </p>
                        <p className='text-white bg-clip-text'>
                            {achievement.date}
                        </p>
                    </div>

                    <p className='text-white/70 mb-4'>
                        {achievement.description}
                    </p>

                    {achievement.details && (
                        <div className='mt-auto flex flex-col'>
                            <button
                                onClick={toggleExpand}
                                className='w-full flex items-center justify-between p-4 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200'
                            >
                                <span className='text-white font-medium'>
                                    View Details
                                </span>
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
                                        transition={{ duration: 0.25 }}
                                        className='overflow-hidden'
                                    >
                                        <div className='p-4 pt-0 space-y-4 text-white/80'>
                                            <ContentRenderer
                                                content={achievement.details}
                                            />
                                            {achievement.image && (
                                                <div className='rounded-lg overflow-hidden border border-white/20'>
                                                    <img
                                                        src={achievement.image}
                                                        alt={achievement.title}
                                                        className='w-full h-auto'
                                                        loading='lazy'
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
