"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch("https://email-service-backend-hvcv.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
  
    if (result.success) {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Error sending email. Please try again.");
    }
  };


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">rohansingh9135@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 8906128883</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Ranchi, India</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <Input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
