export default function FeaturedWorkComponent({ title, category, description, image }: { title: string, category: string, description: string, image: string }) {
  return (
      <div className="flex items-center gap-4">
          <img src={image} alt={title} className="w-20 h-20 rounded-md" />
          <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-600">{category}</p>
              <p className="text-gray-500">{description}</p>
          </div>
      </div>
  )
}


  