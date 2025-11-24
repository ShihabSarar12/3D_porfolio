// Portfolio Data - Update this file to customize your portfolio content

export const personalInfo = {
    name: 'Shihab Sarar',
    title: 'Computer Science & Engineering Professional',
    tagline: 'Building innovative solutions through code and research',
    email: 'shihabsararchamok@gmail.com',
    phone: '+8801788667080',
    location: 'Dhaka, Bangladesh',
    links: {
        github: 'https://github.com/ShihabSarar12',
        linkedin: 'https://www.linkedin.com/in/shihabsarar1201/',
    },
    bio: 'Passionate Computer Science & Engineering professional with expertise in full-stack development, machine learning, and distributed systems. I love solving complex problems and building scalable solutions that make a real impact.',
};

export const experiences = [
    {
        id: 1,
        company: 'Tech Corp',
        position: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        startDate: 'Jan 2022',
        endDate: 'Present',
        color: 'from-indigo-500 to-purple-500',
        description:
            'Leading development of cloud-native microservices architecture serving millions of users',
        achievements: [
            'Architected and deployed microservices reducing latency by 45%',
            'Led team of 5 engineers in delivering critical features',
            'Implemented CI/CD pipelines improving deployment frequency by 3x',
        ],
        technologies: ['React', 'Node.js', 'Kubernetes', 'AWS', 'PostgreSQL'],
    },
    {
        id: 2,
        company: 'Innovation Labs',
        position: 'Full Stack Developer',
        location: 'Remote',
        type: 'Full-time',
        startDate: 'Jun 2020',
        endDate: 'Dec 2021',
        color: 'from-orange-500 to-red-500',
        description:
            'Developed scalable web applications and REST APIs for e-commerce platform',
        achievements: [
            'Built responsive web apps serving 100K+ daily active users',
            'Optimized database queries resulting in 60% faster page loads',
            'Mentored 3 junior developers on best practices',
        ],
        technologies: ['Python', 'Django', 'React', 'Docker', 'Redis'],
    },
    {
        id: 3,
        company: 'StartUp Inc',
        position: 'Software Engineering Intern',
        location: 'Boston, MA',
        type: 'Internship',
        startDate: 'May 2019',
        endDate: 'Aug 2019',
        color: 'from-purple-500 to-pink-500',
        description:
            'Contributed to frontend development and data visualization features',
        achievements: [
            'Developed interactive dashboards using D3.js and React',
            'Improved code coverage from 45% to 78%',
            'Collaborated in agile team environment',
        ],
        technologies: ['JavaScript', 'React', 'D3.js', 'Git'],
    },
];

export const education = [
    {
        id: 1,
        institution: 'University of Technology',
        degree: 'Master of Science in Computer Science',
        field: 'Specialization in Machine Learning & AI',
        location: 'Boston, MA',
        startDate: '2020',
        endDate: '2022',
        gpa: '3.9/4.0',
        color: 'from-purple-500 to-pink-500',
        description:
            'Focus on deep learning, computer vision, and distributed systems',
        coursework: [
            'Advanced Machine Learning',
            'Computer Vision',
            'Distributed Systems',
            'Algorithm Design & Analysis',
            'Natural Language Processing',
        ],
        achievements: [
            'Graduate Research Assistant',
            "Dean's List - All Semesters",
            'Published 2 conference papers',
        ],
    },
    {
        id: 2,
        institution: 'State University',
        degree: 'Bachelor of Engineering in Computer Science',
        field: 'Minor in Mathematics',
        location: 'San Diego, CA',
        startDate: '2016',
        endDate: '2020',
        gpa: '3.8/4.0',
        color: 'from-blue-500 to-cyan-500',
        description:
            'Strong foundation in computer science fundamentals and software engineering',
        coursework: [
            'Data Structures & Algorithms',
            'Operating Systems',
            'Computer Networks',
            'Database Management Systems',
            'Software Engineering',
        ],
        achievements: [
            'Summa Cum Laude',
            'ACM Programming Competition Winner',
            'Undergraduate Teaching Assistant',
        ],
    },
];

export const research = [
    {
        id: 1,
        title: 'Efficient Deep Learning Models for Edge Computing',
        authors: 'Your Name, Dr. Jane Smith, Dr. John Doe',
        yourName: 'Your Name',
        venue: 'International Conference on Machine Learning (ICML) 2023',
        platform: 'ICML',
        date: 'July 2023',
        type: 'Conference Paper',
        rank: 'A*',
        impactFactor: '4.8',
        color: 'from-purple-500 to-pink-500',
        description:
            'Proposed novel architecture for deploying deep learning models on resource-constrained edge devices with minimal accuracy loss',
        links: {
            paper: 'https://arxiv.org/paper-link',
            code: 'https://github.com/yourusername/research-project',
        },
        storyBehindIt: `The inspiration for this research came during my internship at a **robotics company**, where I witnessed firsthand the challenges of deploying sophisticated AI models on resource-limited edge devices. Traditional deep learning models required **powerful GPUs** and significant memory, making them impractical for real-time robotics applications.

![Research Lab Setup](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80)

I spent countless late nights in the lab, experimenting with different **model compression techniques** and architecture designs. The breakthrough came when I realized that we could strategically prune network connections based on their **importance during inference**, rather than training. This dynamic approach allowed us to maintain model accuracy while significantly reducing computational requirements.

The journey wasn't without setbacks. Our initial prototypes showed promise in simulation but **failed miserably** on actual hardware due to memory bandwidth constraints. It took **three months** of iterative refinement and close collaboration with hardware engineers to develop a solution that worked in practice.

![Hardware Testing](https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80)`,
        storyImage: null,
        problemStatement: `**Challenge:** Modern deep learning models are **computationally expensive** and require substantial memory, making deployment on edge devices (smartphones, IoT sensors, drones) extremely challenging.

**Specific Issues:**
- Standard models require **100+ MB of memory**
- Inference time exceeds real-time requirements (**>100ms**)
- Power consumption drains battery-powered devices
- Existing compression techniques sacrifice **10-15% accuracy**

![Edge Device Constraints](https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80)

**Research Gap:** Previous work focused on **static model compression** during training, but didn't account for dynamic resource constraints during deployment or the varying complexity of input data.`,
        methodology: `**1. Dynamic Pruning Framework**
We developed a **runtime pruning system** that adapts model complexity based on:
- Available computational resources
- Input data complexity
- Latency requirements

![System Architecture Diagram](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)

**2. Architecture Design**
- Implemented **early-exit mechanisms** for simple inputs
- Designed **layer-wise compression** with importance scoring
- Created knowledge distillation pipeline from teacher models

**3. Experimental Setup**
- Tested on **5 edge devices** (Raspberry Pi 4, Jetson Nano, etc.)
- Evaluated on **ImageNet, COCO**, and custom robotics datasets
- Compared against **MobileNet, EfficientNet**, and TinyML baselines

**4. Optimization Strategy**
- Used **mixed-precision quantization** (INT8/FP16)
- Implemented operator fusion for **reduced memory access**
- Applied neural architecture search for optimal configurations`,
        methodologyImage: null,
        result: `**Performance Improvements:**
- **3x speedup** in inference time (30ms vs 90ms)
- **2.5x reduction** in memory footprint (40MB vs 100MB)
- **Only 2% accuracy drop** compared to full models
- **45% lower power consumption**

![Performance Comparison Graph](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

**Key Findings:**
1. Dynamic pruning outperforms static compression by **25%**
2. Early-exit mechanisms save **60% computation** on simple inputs
3. Layer-wise compression provides better **accuracy-efficiency trade-off**
4. Our approach **generalizes across different architectures**

**Real-World Impact:**
- Successfully deployed on **drone navigation system**
- Enables **real-time object detection at 33 FPS** on mobile devices
- Reduced cloud computing costs by **70%** for edge inference
- Won **"Best Paper Award"** at ICML 2023

![Award Ceremony](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80)`,
        resultImage: null,
        tags: ['Deep Learning', 'Edge Computing', 'Model Compression'],
        impact: 'Achieved 3x speedup with only 2% accuracy drop on mobile devices',
    },
    {
        id: 2,
        title: 'Scalable Distributed Training Framework for Large Language Models',
        authors: 'Your Name, Research Team',
        yourName: 'Your Name',
        venue: 'Neural Information Processing Systems (NeurIPS) 2022',
        platform: 'NeurIPS',
        date: 'December 2022',
        type: 'Conference Paper',
        rank: 'A*',
        impactFactor: '5.2',
        color: 'from-orange-500 to-red-500',
        description:
            'Developed distributed training framework that enables efficient training of LLMs across thousands of GPUs',
        links: {
            paper: 'https://arxiv.org/paper-link-2',
            code: 'https://github.com/yourusername/distributed-training',
        },
        storyBehindIt: `This project began when our research lab acquired access to a large GPU cluster, but existing frameworks couldn't efficiently utilize all the resources. Training large language models was painfully slow, taking weeks even with hundreds of GPUs.

I dove deep into distributed systems literature and GPU programming, learning about communication bottlenecks and memory hierarchies. The key insight came from analyzing network traces – we were spending more time moving data between GPUs than actually computing!

By redesigning the data pipeline and implementing smart gradient compression, we achieved near-linear scaling. The moment our training job utilized 1000+ GPUs efficiently was unforgettable – it felt like witnessing the future of AI research.`,
        storyImage: null,
        problemStatement: `**Challenge:** Training large language models (10B+ parameters) requires massive computational resources and faces severe scalability bottlenecks.

**Key Problems:**
- Communication overhead increases super-linearly with GPU count
- Memory constraints limit batch sizes and model sizes
- Load imbalance causes GPU underutilization
- Existing frameworks scale poorly beyond 256 GPUs

**Impact:** Training GPT-3 scale models takes months and costs millions, limiting research accessibility.`,
        methodology: `**1. Gradient Compression Pipeline**
- Implemented top-k sparsification with error feedback
- Designed adaptive compression based on layer sensitivity
- Used mixed-precision gradients (FP32/FP16/INT8)

**2. Communication Optimization**
- Overlapped computation with communication
- Implemented hierarchical all-reduce for better bandwidth utilization
- Used NCCL optimizations and custom kernels

**3. Memory Management**
- Gradient checkpointing with smart recomputation
- Pipeline parallelism with micro-batching
- ZeRO optimizer state sharding

**4. Load Balancing**
- Dynamic work stealing between GPUs
- Adaptive batch splitting
- Asynchronous gradient updates`,
        methodologyImage: null,
        result: `**Scalability Results:**
- **Near-linear scaling** up to 2048 GPUs (93% efficiency)
- **40% faster** training than baseline frameworks
- **2x larger models** trainable on same hardware
- **50% reduction** in memory footprint

**Training Improvements:**
- GPT-2 (1.5B params): 3 days → 1.2 days
- GPT-3 scale (13B params): 6 weeks → 3.5 weeks
- Achieved 55% MFU (model FLOPs utilization)

**Adoption:**
- Framework adopted by 3 major research labs
- Used to train 5+ published models
- 2000+ GitHub stars
- Featured in NVIDIA GTC keynote`,
        resultImage: null,
        tags: ['LLMs', 'Distributed Systems', 'GPU Computing'],
        impact: 'Reduced training time by 40% compared to baseline methods',
    },
    {
        id: 3,
        title: 'Adaptive Caching Strategies for Real-Time Data Pipelines',
        authors: 'Your Name, Dr. Alice Johnson',
        yourName: 'Your Name',
        venue: 'Journal of Distributed Computing (JDC) 2021',
        platform: 'JDC',
        date: 'September 2021',
        type: 'Journal Article',
        rank: 'Q1',
        impactFactor: '3.9',
        color: 'from-green-500 to-emerald-500',
        description:
            'Investigated adaptive caching mechanisms to optimize throughput in high-volume streaming data pipelines',
        links: {
            paper: 'https://journal-link.com/article',
        },
        storyBehindIt: `Working with a financial services company, I observed that their real-time trading platform suffered from unpredictable latency spikes during market volatility. Traditional caching strategies failed because market patterns changed rapidly.

The breakthrough came from applying reinforcement learning to cache management. Instead of using static policies, we trained an agent to predict which data would be needed next based on market conditions. It was fascinating to see the system learn trading patterns and adapt its caching strategy in real-time.`,
        storyImage: null,
        problemStatement: `**Challenge:** Real-time data pipelines in financial trading systems face unpredictable access patterns and strict latency requirements (<10ms).

**Issues:**
- Static caching policies cause frequent cache misses during volatility
- LRU/LFU don't account for temporal access patterns
- High-frequency trading requires sub-millisecond responses
- Data freshness requirements conflict with caching

**Goal:** Develop adaptive caching that learns from access patterns and market conditions.`,
        methodology: `**1. Reinforcement Learning Framework**
- Modeled caching as MDP (Markov Decision Process)
- Used Deep Q-Network (DQN) for policy learning
- Reward function balancing hit rate, latency, and freshness

**2. Feature Engineering**
- Historical access patterns (sliding window)
- Market volatility indicators
- Time-of-day patterns
- Cross-asset correlations

**3. System Design**
- Multi-tier cache hierarchy (L1: memory, L2: SSD)
- Predictive prefetching based on learned patterns
- Dynamic TTL adjustment
- Parallel cache warming

**4. Evaluation**
- Deployed in production trading system
- A/B testing against LRU, LFU, ARC baselines
- Measured throughput, latency (p50, p99), hit rates`,
        methodologyImage: null,
        result: `**Performance Gains:**
- **2.5x throughput** increase (50K → 125K requests/sec)
- **p99 latency** reduced from 45ms to 8ms
- **Cache hit rate** improved from 72% to 91%
- **40% reduction** in downstream database load

**Key Insights:**
1. RL agent learned to predict market-moving events
2. Adaptive TTL prevented stale data issues
3. Cross-asset prefetching improved hit rates by 15%
4. System adapted to regime changes within 10 minutes

**Production Impact:**
- Deployed across 5 trading desks
- Enabled new high-frequency trading strategies
- Reduced infrastructure costs by 30%
- Filed patent for adaptive caching system`,
        resultImage: null,
        tags: ['Caching', 'Stream Processing', 'Performance Optimization'],
        impact: 'Improved pipeline throughput by 2.5x in production systems',
    },
];

export const achievements = [
    {
        id: 1,
        title: 'Best Paper Award',
        organization: 'ICML 2023',
        date: 'July 2023',
        description:
            'Received best paper award for research on edge computing and deep learning optimization',
        category: 'Research',
        prize: '$5,000',
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
        details: `Received the **prestigious Best Paper Award** at the **International Conference on Machine Learning (ICML) 2023**, one of the top AI conferences globally with an acceptance rate of only **21.4%**.

![Conference Presentation](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80)

**Recognition Details:**
- Selected from **6,538 submissions** worldwide
- Presented to an audience of **5,000+ researchers**
- Featured in **ICML's highlight session** (top 2% of papers)
- Paper has been **cited 150+ times** in 6 months

**Award Includes:**
- **$5,000 cash prize**
- **Invited talk** at major tech companies
- **Media coverage** in MIT Technology Review
- Invitation to **NeurIPS 2024** as keynote speaker

The work demonstrates how **edge computing** can revolutionize AI deployment on resource-constrained devices, with applications in **robotics, IoT, and mobile computing**.`,
    },
    {
        id: 2,
        title: 'Tech Innovation Award',
        organization: 'Tech Corp',
        date: 'March 2023',
        description:
            'Recognized for exceptional contribution to system architecture redesign',
        category: 'Professional',
        prize: 'Stock Options + $10,000 Bonus',
        stipend: '$10,000',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        details: `Awarded the **Tech Innovation Award** for leading the **complete redesign** of our microservices architecture, resulting in **45% reduction in latency** and **60% cost savings**.

**Project Impact:**
- Redesigned architecture serving **5 million users**
- Reduced **cloud costs by $2M annually**
- Improved **system reliability** from 99.5% to 99.99%
- **Zero-downtime migration** over 6 months

![Team Celebration](https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80)

**Recognition:**
- **Employee of the Year** runner-up
- Featured in company-wide **all-hands presentation**
- **Patent filed** for novel caching strategy
- Promoted to **Senior Software Engineer**

**Award Package:**
- **$10,000 cash bonus**
- **Stock options** worth $50,000
- **Professional development budget** of $5,000
- Invitation to **leadership training program**`,
    },
    {
        id: 3,
        title: 'Open Source Contributor',
        organization: 'GitHub',
        date: '2020 - Present',
        description:
            'Active contributor to major open source projects with 500+ stars on personal repositories',
        category: 'Community',
    },
    {
        id: 4,
        title: 'Hackathon Winner',
        organization: 'Global Hackathon 2022',
        date: 'November 2022',
        description:
            'First place among 200+ teams for developing AI-powered accessibility tool',
        category: 'Competition',
        prize: '$25,000 + Incubator Program',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
        details: `Won **first place** at the **Global Accessibility Hackathon 2022**, competing against **200+ teams** from around the world in a **48-hour coding marathon**.

![Hackathon Presentation](https://images.unsplash.com/photo-1559223607-a43c990c2e23?w=800&q=80)

**Our Solution:**
Developed **"VoiceNav"** - an AI-powered tool that helps **visually impaired users** navigate websites using natural language voice commands.

**Technical Highlights:**
- **Real-time audio processing** with <100ms latency
- **Computer vision** to understand page layout
- **Natural language understanding** for commands
- Works on **any website** without modifications

**Competition Results:**
- **First place** overall (200+ teams)
- **Best Use of AI** special award
- **Audience Choice Award**

**Prize Package:**
- **$25,000 cash prize**
- **6-month incubator program** at Tech Hub
- **Mentorship** from industry leaders
- **AWS credits** worth $10,000
- Featured on **TechCrunch** and **The Verge**

The project is now being developed into a **commercial product** with backing from angel investors.`,
    },
    {
        id: 5,
        title: 'Graduate Research Fellowship',
        organization: 'National Science Foundation',
        date: '2021',
        description:
            'Awarded prestigious NSF Graduate Research Fellowship for doctoral studies',
        category: 'Academic',
    },
    {
        id: 6,
        title: 'Published Author',
        organization: 'Various Conferences & Journals',
        date: '2021 - 2023',
        description:
            'Published 5+ peer-reviewed papers in top-tier CS conferences and journals',
        category: 'Research',
    },
];

export const skills = {
    categories: [
        {
            name: 'Programming Languages',
            items: [
                'Python',
                'JavaScript',
                'TypeScript',
                'Java',
                'C++',
                'Go',
                'SQL',
            ],
        },
        {
            name: 'Web Technologies',
            items: [
                'React',
                'Node.js',
                'Next.js',
                'Express',
                'HTML5',
                'CSS3',
                'REST APIs',
                'GraphQL',
            ],
        },
        {
            name: 'AI/ML',
            items: [
                'TensorFlow',
                'PyTorch',
                'Scikit-learn',
                'Keras',
                'Computer Vision',
                'NLP',
            ],
        },
        {
            name: 'Cloud & DevOps',
            items: [
                'AWS',
                'Docker',
                'Kubernetes',
                'CI/CD',
                'Terraform',
                'Jenkins',
            ],
        },
        {
            name: 'Databases',
            items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'],
        },
        {
            name: 'Tools & Others',
            items: [
                'Git',
                'Linux',
                'Agile',
                'System Design',
                'Microservices',
                'Performance Optimization',
            ],
        },
    ],
};

export const projects = [
    {
        id: 1,
        name: 'AI Code Assistant',
        description:
            'VS Code extension that uses machine learning to provide intelligent code suggestions and auto-completion',
        longDescription:
            'A comprehensive VS Code extension that leverages transformer-based language models to understand code context and provide intelligent suggestions. Features include multi-language support, real-time error detection, code refactoring suggestions, and documentation generation.',
        technologies: ['TypeScript', 'Python', 'TensorFlow', 'VS Code API'],
        github: 'https://github.com/yourusername/ai-code-assistant',
        demo: 'https://demo-link.com',
        image: 'code-assistant',
        color: 'from-orange-500 to-red-500',
        stats: {
            stars: 1200,
            users: '5K+',
            downloads: '50K+',
        },
        features: [
            'Context-aware code completion',
            'Real-time error detection and fixes',
            'Automatic documentation generation',
            'Multi-language support (10+ languages)',
            'Refactoring suggestions',
        ],
        storyBehindIt: `During my final year of university, I noticed my friends spending **hours debugging** simple syntax errors and searching for API documentation. This inspired me to create a tool that could **intelligently understand code context** and provide real-time assistance.

![Development Process](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80)

The project started as a **weekend hackathon idea** but quickly gained traction when I shared it on Reddit. Within a week, we had **500+ beta testers** providing valuable feedback. The most challenging part was training the model on diverse codebases while keeping it **lightweight enough** for real-time suggestions.`,
        howIGotTheWork: `I was working as a **teaching assistant** for an introductory programming course when I realized students were making the same mistakes repeatedly. I pitched the idea to my professor, who connected me with the **university's innovation lab**.

They provided me with:
- **GPU credits** for model training
- **Mentorship** from industry experts
- Access to their **code repository** for training data

The project was also selected for **GitHub's Student Developer Program**, which gave us additional resources and visibility.

![Team Collaboration](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)`,
        whatItDoes: `**AI Code Assistant** is a **VS Code extension** that acts as your intelligent coding companion. Here's what makes it special:

**Core Features:**
- **Real-time Code Completion**: Suggests complete functions based on context
- **Error Detection**: Identifies bugs before you even run the code
- **Smart Refactoring**: Recommends code improvements and optimizations
- **Auto-Documentation**: Generates docstrings and comments automatically

**Technical Implementation:**
- Uses a **fine-tuned GPT-based model** trained on 10M+ lines of code
- Implements **local caching** for instant suggestions
- Supports **10+ programming languages** including Python, JavaScript, Java, and C++

![Feature Demo](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

**Impact:**
- **50,000+ downloads** in the first 6 months
- **4.8/5 star rating** on VS Code Marketplace
- Saves developers an average of **2 hours per week**
- Featured in **Microsoft's Developer Blog**`,
    },
    {
        id: 2,
        name: 'Distributed Task Queue',
        description:
            'High-performance distributed task queue system with real-time monitoring and auto-scaling capabilities',
        longDescription:
            'Enterprise-grade distributed task queue built from scratch, supporting millions of tasks per day with fault tolerance, priority queues, and auto-scaling. Includes comprehensive monitoring dashboard and admin interface.',
        technologies: ['Go', 'Redis', 'Docker', 'React'],
        github: 'https://github.com/yourusername/task-queue',
        image: 'task-queue',
        color: 'from-purple-500 to-pink-500',
        stats: {
            stars: 850,
            users: '2K+',
            downloads: '20K+',
        },
        features: [
            'Processes 1M+ tasks/day',
            'Auto-scaling based on queue depth',
            'Priority queues with rate limiting',
            'Real-time monitoring dashboard',
            'Fault tolerance with retry logic',
        ],
        storyBehindIt: `At my internship at a **fintech startup**, I witnessed firsthand how their **legacy task processing system** was causing delays during peak hours. Tasks were getting lost, and there was **no visibility** into what was happening.

I spent my evenings building a **proof-of-concept** using Go and Redis. The CTO was impressed by the **30% performance improvement** in my prototype and greenlit the project for production use.

![System Architecture](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80)`,
        howIGotTheWork: `This project was born out of **necessity** at my internship. The existing system couldn't handle:
- **Peak load** during market hours
- **Failed task recovery**
- Real-time monitoring

I proposed building a new system and was given **3 months** to deliver a working prototype. The company provided:
- **Dedicated server resources** for testing
- **Code review** from senior engineers
- **Production deployment support**

After successful deployment, they offered me a **full-time position** and made this project **open-source**.`,
        whatItDoes: `**Distributed Task Queue** is a **high-performance task processing system** designed for enterprise scale:

**Key Capabilities:**
- **Processes 1M+ tasks daily** with **sub-second latency**
- **Automatic scaling** based on queue depth and system load
- **Priority queues** with configurable rate limiting
- **Fault tolerance** with automatic retries and dead-letter queues

**Architecture:**
- Built with **Go** for maximum concurrency
- Uses **Redis** for ultra-fast queue operations
- **Docker containers** for easy deployment
- **React dashboard** for real-time monitoring

![Monitoring Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)

**Production Stats:**
- Handles **10,000 tasks/second** during peak
- **99.99% uptime** over 2 years
- Used by **50+ companies** in production
- Reduced infrastructure costs by **40%** compared to alternatives`,
    },
    {
        id: 3,
        name: 'Real-Time Analytics Dashboard',
        description:
            'Interactive dashboard for visualizing streaming data with sub-second latency',
        longDescription:
            'Modern analytics platform for real-time data visualization, supporting multiple data sources, custom visualizations, and collaborative features. Built for high-frequency data updates with optimized rendering.',
        technologies: ['React', 'D3.js', 'WebSocket', 'Node.js'],
        github: 'https://github.com/yourusername/analytics-dashboard',
        demo: 'https://demo-link2.com',
        image: 'dashboard',
        color: 'from-blue-500 to-cyan-500',
        stats: {
            stars: 650,
            users: '1K+',
            downloads: '15K+',
        },
        features: [
            'Sub-second data updates',
            '30+ chart types',
            'Collaborative dashboards',
            'Custom data connectors',
            'Export and sharing features',
        ],
    },
];
