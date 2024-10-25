export default function HeroSection() {
    return (
        <div className="my-[156px] w-full flex justify-center gap-[150px] mx-auto flex-wrap">
            <div className="pl-[50px] max-w-[521px] flex flex-col gap-8">
            <img src="/hero-image.png" alt="John" className="rounded-full w-32 h-32 mb-6" />
                <h1 className="text-4xl font-extrabold text-pretty">Hi, I am John,<br />Creative Technologist</h1>
                <p className="text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="bg-red-400 max-w-[205px] h-[50px] border-sm">Download Resume</button>
            </div>
            {/* <Image src={HeroImage} alt="Hero Image" /> */}
        </div>
    );
}







