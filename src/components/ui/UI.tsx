import { About } from '../About';
import { AchievementsDetailed } from '../AchievementsDetailed';
import { Contact } from '../Contact';
import { DepthSection } from '../DepthSection';
import { Education } from '../Education';
import { Experience } from '../Experience';
import { Profile } from '../Profile';
import { ProjectsDetailed } from '../ProjectsDetailed';
import { ResearchDetailed } from '../ResearchDetailed';
import { SectionOverview } from '../SectionOverview';

const UI = () => {
    return (
        <main className='relative z-40 w-screen'>
            <Profile />

            <section className='min-h-screen'>
                <SectionOverview />
            </section>

            <section className='min-h-screen'>
                <About />
            </section>

            <section className='min-h-screen'>
                <Education />
            </section>
            <section className='min-h-screen'>
                <Experience />
            </section>
            <section className='min-h-screen'>
                <ResearchDetailed />
            </section>
            <section className='min-h-screen'>
                <AchievementsDetailed />
            </section>
            <section className='min-h-screen'>
                <ProjectsDetailed />
            </section>
            <section className='min-h-screen'>
                <Contact />
            </section>
        </main>
    );
};

export default UI;
