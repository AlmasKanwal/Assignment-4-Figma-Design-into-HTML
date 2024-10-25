import RecentPost from "./recentpost";

export default function RecentPostsSection() {
    return (
        <section className="w-full min-h-[502px] p-6 bg-[#F4E2E2]">
            <div className="flex justify-between px-5">
                <h2 className="text-2xl font-bold">Recent Posts</h2>
                <p className="text-2xl font-bold text-red-500">View All</p>
            </div>
            <div className="flex justify-center gap-10 flex-wrap pt-5">
                <RecentPost title="Making a Design System from Scratch" date="12 Feb 2020" category="Design, Pattern" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." />
                <RecentPost title="Making a Design System from Scratch" date="12 Feb 2020" category="Design, Pattern" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." />
            </div>
        </section>
    );
}



