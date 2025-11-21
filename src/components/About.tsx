import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Brain, Cloud, Rocket, Users } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolio';
import { skillIcons } from '../data/skillIcons';
import { useTilt } from '../hooks/useTilt';

const highlights = [
    {
        icon: Code2,
        label: 'Full Stack Development',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Brain,
        label: 'AI & Machine Learning',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Database,
        label: 'System Architecture',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: Cloud,
        label: 'Cloud & DevOps',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: Rocket,
        label: 'Performance Optimization',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        icon: Users,
        label: 'Team Leadership',
        color: 'from-indigo-500 to-purple-500',
    },
];

function HighlightCard({
    item,
    index,
    isInView,
}: {
    item: any;
    index: number;
    isInView: boolean;
}) {
    const cardRef = useTilt<HTMLDivElement>();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.1 * index }}
        >
            <motion.div
                ref={cardRef}
                whileHover={{
                    scale: 1.05,
                    y: -1,
                    backdropFilter: 'blur(16px)',
                    transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className='p-6 rounded-2xl bg-white/0 border border-white/10 hover:border-white/20 backdrop-blur-none shadow-lg transition-all duration-300 cursor-pointer group'
            >
                <div
                    className={`inline-flex p-3 rounded-lg bg-linear-to-br ${item.color} mb-3 transform transition-transform duration-300 group-hover:scale-110 drop-shadow-md`}
                >
                    <item.icon className='w-6 h-6 text-white drop-shadow-md' />
                </div>
                <p className='text-white font-semibold drop-shadow-md'>
                    {item.label}
                </p>
            </motion.div>
        </motion.div>
    );
}

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='relative py-20 lg:py-32 underwater-content'>
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
                        >
                            <span className='inline-block px-4 py-2 mb-2 rounded-full bg-white/10 border border-white/20 font-bold text-white drop-shadow-md'>
                                About Me
                            </span>
                        </motion.span>
                        <h2 className='mb-4 text-3xl font-semibold text-white drop-shadow-md'>
                            Passionate About Technology & Innovation
                        </h2>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                y: -3,
                                backdropFilter: 'blur(16px)',
                                transition: {
                                    duration: 0.15,
                                    ease: 'easeOut',
                                },
                            }}
                            className='p-6 rounded-2xl bg-white/0 border border-white/10 backdrop-blur-none shadow-lg transition-all duration-300'
                        >
                            <p className='text-white font-semibold mb-6 drop-shadow-md'>
                                {personalInfo.bio}
                            </p>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600' />
                                    <span className='text-white font-medium drop-shadow-md'>
                                        {personalInfo.location}
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600' />
                                    <span className='text-white font-medium drop-shadow-md'>
                                        {personalInfo.email}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className='grid grid-cols-2 gap-6'
                        >
                            {highlights.map((item, index) => (
                                <HighlightCard
                                    key={item.label}
                                    item={item}
                                    index={index}
                                    isInView={isInView}
                                />
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className='text-center mb-8 text-2xl font-semibold text-white drop-shadow-md'>
                            Technical Skills
                        </h3>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {skills.categories.map(
                                (category, categoryIndex) => (
                                    <motion.div
                                        key={categoryIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={
                                            isInView ? { opacity: 1, y: 0 } : {}
                                        }
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.1 * categoryIndex,
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            y: -3,
                                            backdropFilter: 'blur(16px)',
                                            transition: {
                                                duration: 0.25,
                                                ease: 'easeOut',
                                            },
                                        }}
                                        className='p-6 rounded-2xl bg-white/0 border border-white/10 backdrop-blur-none shadow-lg transition-all duration-300'
                                    >
                                        <h4 className='mb-4 text-white font-semibold drop-shadow-md'>
                                            {category.name}
                                        </h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {category.items.map(
                                                (skill, skillIndex) => {
                                                    const config =
                                                        skillIcons[skill];
                                                    const Icon =
                                                        config?.Icon ?? Code2;
                                                    const color =
                                                        config?.color ??
                                                        '#e5e7eb';
                                                    return (
                                                        <span
                                                            key={skillIndex}
                                                            className='flex items-center gap-2 px-3 py-1 rounded-full bg-white/0 backdrop-blur-none text-white font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-xl cursor-default drop-shadow-md'
                                                        >
                                                            <Icon
                                                                color={color}
                                                                className='w-4 h-4'
                                                            />
                                                            {skill}
                                                        </span>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
