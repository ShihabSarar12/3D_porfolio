import { About } from '../About';
import { AchievementsDetailed } from '../AchievementsDetailed';
import { Contact } from '../Contact';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Profile } from '../Profile';
import { ProjectsDetailed } from '../ProjectsDetailed';
import { ResearchDetailed } from '../ResearchDetailed';
import { SectionOverview } from '../SectionOverview';

const UI = () => {
    return (
        <main className='relative z-40 w-screen'>
            <section id='home' className='min-h-screen'>
                <Profile />
                <SectionOverview />
            </section>
            <section id='about' className='min-h-screen'>
                <About />
            </section>

            <section id='education' className='min-h-screen'>
                <Education />
            </section>

            <section id='experience' className='min-h-screen'>
                <Experience />
            </section>

            <section id='research' className='min-h-screen'>
                <ResearchDetailed />
            </section>

            <section id='achievements' className='min-h-screen'>
                <AchievementsDetailed />
            </section>

            <section id='projects' className='min-h-screen'>
                <ProjectsDetailed />
            </section>

            <section id='contact' className='min-h-screen'>
                <Contact />
            </section>
        </main>
    );
};

export default UI;
