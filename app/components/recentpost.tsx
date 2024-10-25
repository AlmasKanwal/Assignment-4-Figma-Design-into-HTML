export default function RecentPost({ title, date, category, description }: { title: string, date: string, category: string, description: string }) {
    return (
        <div className="h-[356px] min-w-[350px] w-[483px] bg-white p-8 flex flex-col gap-9">
            <h3 className="text-[26px] font-bold">{title}</h3>
            <p className="text-gray-600">{date} | Design, {category}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}




