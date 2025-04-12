"use client"

import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResumeContent() {
  return (
    <div className="space-y-6 text-gray-800">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Rohan Kumar Singh</h1>
        <h2 className="text-xl font-semibold text-gray-700">Frontend Developer</h2>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:rohansingh9135@gmail.com"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <Mail className="h-4 w-4" />
            <span>rohansingh9135@gmail.com</span>
          </a>
          <a href="tel:8906128883" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <Phone className="h-4 w-4" />
            <span>8906128883</span>
          </a>
          <a
            href="https://linkedin.com/in/rohan8883"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <Linkedin className="h-4 w-4" />
            <span>linkedin.com/in/rohan8883</span>
          </a>
          <a href="https://github.com/rohan8883" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <Github className="h-4 w-4" />
            <span>github.com/rohan8883</span>
          </a>
          <a
            href="https://marriage-ui-rohan.netlify.app/"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            <Globe className="h-4 w-4" />
            <span>Portfolio</span>
          </a>
        </div>
      </header>

      <Separator />

      {/* Summary */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-2">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-700">
          Frontend Developer with 3 years of experience specializing in building and optimizing user-centric, responsive
          web applications using React.js. Proficient in Git for version control and collaboration. Adept at integrating
          APIs, state management, and creating reusable components to deliver seamless user experiences.
        </p>
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">WORK EXPERIENCE</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">AADRIKA ENTERPRISES</h3>
              <span className="text-sm text-gray-600">April 2023 - Present</span>
            </div>
            <h4 className="text-md italic mb-2">Frontend Developer</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Developed responsive, user-friendly web applications using React.js and modern JavaScript features.
              </li>
              <li>Implemented reusable and optimized React components, reducing development time by 20%.</li>
              <li>Collaborated with backend developers to integrate RESTful APIs into the frontend.</li>
              <li>E-Governance – Revenue Augmentation project implementation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">TECHNICAL SKILLS</h2>

        <div className="space-y-2">
          <div>
            <h3 className="text-md font-semibold mb-1">Frontend Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-gray-100">
                React.js
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                JavaScript (ES6+)
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                HTML5
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                CSS3
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Tailwind CSS
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-1">Version Control</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-gray-100">
                Git
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                GitHub
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-1">State Management</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-gray-100">
                Context API
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-1">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-gray-100">
                VS Code
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Postman
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                NPM
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-1">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-gray-100">
                Responsive Web Design
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Debugging
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                Agile Development
              </Badge>
              <Badge variant="outline" className="bg-gray-100">
                PWA
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">PROJECTS</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">Gym Management Software</h3>
              <a href="https://gymsphere.algoworks.online" className="text-sm text-blue-600 hover:underline">
                View Project
              </a>
            </div>
            <p className="text-gray-700 mb-2">
              Developed an intuitive, user-friendly web application for gym owners to manage member details, plans, and
              payments. The software aimed to streamline member registration, plan tracking, payment handling, and
              report generation.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                Managed application state efficiently using React Context API and local state hooks, ensuring smooth
                data flow across components.
              </li>
              <li>Used Tailwind CSS to design visually appealing, mobile-responsive layouts.</li>
              <li>Tools & Technologies: React.js, Tailwind CSS, React Hook Form, Yup, Chart.js, Axios, Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">EDUCATION</h2>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">Bengal College of Engineering</h3>
              <span className="text-sm text-gray-600">July 2016 - July 2020</span>
            </div>
            <p className="text-gray-700">B.Tech in Electronics & Communication Engineering | Percentage: 66%</p>
            <p className="text-gray-700">Final year Project: Third eye for blind person</p>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">Beni Singh College</h3>
              <span className="text-sm text-gray-600">June 2013 - June 2015</span>
            </div>
            <p className="text-gray-700">Higher Secondary, Science | Percentage: 61%</p>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-md font-semibold">J Spider Institute</h3>
              <span className="text-sm text-gray-600">July 2021 - December 2021</span>
            </div>
            <p className="text-gray-700">Training for Web Development</p>
            <p className="text-gray-700">
              Learned React.js, JavaScript, HTML, CSS for web development. Created single page web applications with
              React.js.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  )
}
