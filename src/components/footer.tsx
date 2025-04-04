import { Github, Linkedin, Mail  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Rohan kr singh</h2>
            <p className="text-gray-400 mt-2">Web Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/rohan8883" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rohan8883/"  target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a> 
            <a href="mailto:rohansingh9135@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rohan kr singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

