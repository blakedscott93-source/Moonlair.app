"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle, Sparkles, Heart, RotateCcw, Clock, Calendar } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerHandWiggle = () => {
    // Trigger wiggle animation by temporarily changing the class
    const hand = document.querySelector('.hand-icon');
    if (hand) {
      hand.classList.remove('animate-[bounce-hand_2s_ease-in-out_infinite]');
      hand.classList.add('animate-wiggle-hand');
      setTimeout(() => {
        hand.classList.remove('animate-wiggle-hand');
        hand.classList.add('animate-[bounce-hand_2s_ease-in-out_infinite]');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7e0] to-[#fff1cc] py-10">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animate-glow-gradient opacity-60"></div>
        
        <div className="relative z-10 flex items-center justify-center px-4 min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            {/* Moonifest Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src="/Icons/icon128.png"
                  alt="Moonifest Logo"
                  width={80}
                  height={80}
                  className="rounded-full object-contain"
                  priority
                />
              </div>
            </motion.div>

            <h1 className="hero-headline text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Manifest Your{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Best Self
              </span>
              , Every Day.
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Turn every new tab into your personal manifestation dashboard with tasks, habits, journaling, and motivation.
            </motion.p>

            {/* Hero CTA with Cartoon Hand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center justify-center mt-8 space-y-4"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={triggerHandWiggle}
                >
                  <img
                    src="/fingerpoint.png"
                    alt="Click hand"
                    className="hand-icon w-[56px] h-auto drop-shadow-md animate-[bounce-hand_2s_ease-in-out_infinite]"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-3 text-base font-semibold shadow-md hover:shadow-[0_0_20px_rgba(255,167,51,0.6)] transition-all duration-300 relative overflow-hidden"
                  >
                    <a 
                      href="https://chromewebstore.google.com/detail/moonifest-your-daily-dash/fhbkcimpcdmddemoglnmodpkinabamlb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10">Add to Chrome</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFA733] to-[#FF7F11] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Secondary Learn More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mb-8"
            >
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToFeatures}
                className="text-lg px-8 py-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Scroll Down CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToFeatures();
                }}
                className="flex flex-col items-center text-gray-600 cursor-pointer animate-bounce hover:text-orange-500 transition-colors duration-300 hidden sm:flex"
              >
                <ChevronDown className="w-6 h-6 text-orange-400 mb-1" />
                <span className="text-sm">Scroll to See How It Works</span>
              </a>
            </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Manifest & Grow
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful tools designed to help you stay consistent, focused, and aligned with your dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Tasks",
                description: "Stay productive and focused every day."
              },
              {
                icon: Sparkles,
                title: "369 Manifestation",
                description: "Write and visualize your affirmations."
              },
              {
                icon: Heart,
                title: "Gratitude Journal",
                description: "Cultivate positivity and reflection."
              },
              {
                icon: RotateCcw,
                title: "Habit Tracker",
                description: "Build lasting routines that stick."
              },
              {
                icon: Clock,
                title: "Timer",
                description: "Stay grounded and manage your focus sessions."
              },
              {
                icon: Calendar,
                title: "Reflection Calendar",
                description: "Track your progress and patterns."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* See Moonifest in Action Section */}
      <section className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Moonifest{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                in Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A beautiful dashboard that helps you stay mindful, consistent, and productive.
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              src: "/screenshots/tasks-screenshot.png",
              alt: "Dashboard Preview",
              title: "Tasks Dashboard"
            },
            {
              src: "/screenshots/369journal-screenshot.png",
              alt: "369 Manifestation Method",
              title: "369 Manifestation"
            },
            {
              src: "/screenshots/habits-screenshot.png",
              alt: "Habit Tracker & Analytics",
              title: "Habit Tracker"
            }
          ].map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-white max-w-[440px] w-full"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium text-sm">{screenshot.title}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-[#FFF8E1] to-[#FFEFD5] rounded-3xl p-12 text-center shadow-lg border border-orange-100 relative overflow-hidden">
              {/* Pulse Animation Background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full pointer-events-none"
              />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Manifest Your Dreams?
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of users who already use Moonifest to stay consistent and manifest their goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="btn-primary bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-xl px-10 py-6 shadow-xl hover:shadow-[0_0_20px_rgba(255,167,51,0.6)] transition-all duration-300 relative overflow-hidden"
                    >
                      <a 
                        href="https://chromewebstore.google.com/detail/moonifest-your-daily-dash/fhbkcimpcdmddemoglnmodpkinabamlb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10">Add to Chrome</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFA733] to-[#FF7F11] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                      </a>
                    </Button>
                  </motion.div>
                  
                  <Button 
                    variant="ghost" 
                    size="lg"
                    onClick={scrollToTop}
                    className="text-xl px-10 py-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    See How It Works
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Moonifest. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built by{" "}
            <a 
              href="https://moonlair.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors duration-300"
            >
              Moonlair
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}