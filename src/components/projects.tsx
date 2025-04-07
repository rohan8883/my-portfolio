import { Button } from "@/components/ui/button"
import { ExternalLink} from "lucide-react"

export default function Projects() {
    const projects = [
        {
            title: "GYM Management Project",
            description:
                "This Gym Management System eliminates manual paperwork, reduces errors in payment tracking, and improves member experience. With automated reminders, analytics, and an easy-to-use interface.",
            image: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg",
            tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            liveLink: "/gymsphere.algoworks.online",
            githubLink: "#",
        },
        {
            title: "Loan Management Project",
            description: "This Loan Management System automates the entire loan lifecycle, reducing manual errors, ensuring timely recovery, and providing a seamless experience for both lenders and borrowers. With real-time tracking.",
            image: "https://www.etmoney.com/learn/wp-content/uploads/2023/03/best-practices-for-home-loans.jpg",
            tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            liveLink: "/loan.algoworks.online",
            githubLink: "",
        },
        {
            title: "RO Service Provider",
            description: "This RO Service Management System automates service request handling, enhances customer experience, and ensures timely maintenance for RO water purifiers. With real-time technician tracking.",
            image: "https://vq.pe/creator/frontend/img/33269/1733472398-1728022607-services-1.webp",
            tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
            liveLink: "/ro.algoworks.online",
            githubLink: "#",
        },
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-48 w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                                            <ExternalLink size={14} /> Live
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

