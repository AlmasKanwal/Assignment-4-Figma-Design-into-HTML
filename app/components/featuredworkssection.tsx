import FeaturedWorkComponent from './featuredworkcomponent';

export default function FeaturedWorksSection() {
    return (
        <section className="w-full min-h-[1070px] flex flex-col items-center py-20">
            <h2 className="text-2xl font-semibold mb-8">Featured Works</h2>
            <div className="flex flex-col gap-12 lg:gap-8">
                <FeaturedWorkComponent title="Designing Dashboards" category="2020 • Dashboard" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." image="/Featured works-1.png" />
                <FeaturedWorkComponent title="Designing Dashboards" category="2020 • Dashboard" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." image="/Featured works-2.png" />
                <FeaturedWorkComponent title="Designing Dashboards" category="2020 • Dashboard" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." image="/Featured works-3.png" />
            </div>
        </section>
    );
}



