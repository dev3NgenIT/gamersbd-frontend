"use client";
import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (you can replace with actual API)
    setFormStatus("success");
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#2a2a2a] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-2xl animate-float delay-700"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information Cards with Animations */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            {/* Address */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Our Location
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    123 Business Avenue
                    <br />
                    Tech District, CA 94103
                    <br />
                    United States
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href="#"
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                    >
                      Get Directions
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-6">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Email Us
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <a
                      href="mailto:support@example.com"
                      className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group/email"
                    >
                      support@example.com
                      <span className="opacity-0 group-hover/email:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <a
                      href="mailto:info@example.com"
                      className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group/email"
                    >
                      info@example.com
                      <span className="opacity-0 group-hover/email:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      We usually respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Call Us
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group/phone"
                    >
                      +1 (234) 567-890
                      <span className="opacity-0 group-hover/phone:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <a
                      href="tel:+0987654321"
                      className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group/phone"
                    >
                      +1 (098) 765-4321
                      <span className="opacity-0 group-hover/phone:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      Mon-Fri, 9am to 6pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Enhanced Design */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-up delay-400">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            {formStatus === "success" ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-scale-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-purple-500/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-purple-500/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-purple-500/50"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-purple-500/50 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section with Glass Effect */}
        <div className="animate-fade-in-up delay-500">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500">
            <div className="flex items-center justify-between mb-6 px-4">
              <h2 className="text-2xl font-bold text-white">
                Visit Our Office
              </h2>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96 w-full relative group">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086577234527!2d-122.4194154846817!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e6e6e9%3A0x6b3b7c6c5b5b5b5b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
