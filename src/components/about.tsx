// import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden">
                            <img
                                src="/myPhoto.jpg"
                                alt="Something"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-gray-700 mb-6">
                            Hello! I'm a passionate web developer with 2 years of experience in React.js. I specialize in building
                            beautiful, functional, and user-friendly web applications.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                        With a strong background in frontend development, I have expertise in React, JavaScript, and Tailwind 
                        CSS. I'm always eager to learn and explore new technologies to stay ahead in the industry.
                        </p>
                        <p className="text-lg text-gray-700">
                        When I'm not coding, you’ll likely find me at the gym. As a fitness enthusiast, I believe that staying active 
                        not only boosts physical health but also enhances focus and problem-solving skills—qualities that directly translate into my work as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

