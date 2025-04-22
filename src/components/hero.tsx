import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
// import Resume from '../'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-gray-700">Rohan kr singh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
          A passionate developer specializing in web development and creating beautiful user experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="/Resume.pdf" download >
          <Button className="flex items-center gap-2">
          Download Resume<ArrowRight size={16} />
          </Button>
          </a> 
          
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/rohan8883" target="_blank" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohan8883/"  target="_blank" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rohansingh9135@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

