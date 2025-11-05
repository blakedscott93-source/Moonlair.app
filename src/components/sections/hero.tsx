"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Chrome } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-50 dark:from-yellow-950/20 dark:via-yellow-900/20 dark:to-orange-950/20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
              <Chrome className="h-3 w-3 mr-1" />
              Featured Extension
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
              <Star className="h-3 w-3 mr-1 fill-current" />
              4.8★ Rating
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
              <Users className="h-3 w-3 mr-1" />
              5,000+ Users
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Turn Every Browser Tab Into A{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Productivity Moment
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Track tasks, practice gratitude, build habits, and stay focused - all without leaving your browser. Join 500+ users transforming their productivity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center mb-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-3"
            >
              <Link href="https://chrome.google.com/webstore/detail/fhbkcimpcdmddemoglnmodpkinabamlb">
                <Chrome className="h-5 w-5 mr-2" />
                Install Free Extension
              </Link>
            </Button>
            
            {/* Secondary line under button */}
            <p className="text-sm text-muted-foreground mb-6">
              ✓ Free forever  ✓ No credit card  ✓ 2-minute setup
            </p>
            
            {/* Trust indicators */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ⭐⭐⭐⭐⭐ 5.0 rating  •  500+ users
            </p>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-all duration-300 mt-6"
            >
              <Link href="/features">
                Explore Features
              </Link>
            </Button>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                    chrome://newtab/
                  </div>
                </div>
                <div className="p-8 text-center">
                  <div className="h-64 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-800/30 dark:to-orange-800/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 16c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z" fill="white"/>
                          <path d="M8 16c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.21-.89 4.21-2.34 5.66C21.21 23.11 19.21 24 16 24c-4.42 0-8-3.58-8-8z" fill="none"/>
                          <circle cx="22" cy="10" r="1" fill="white"/>
                          <circle cx="24" cy="14" r="0.75" fill="white"/>
                          <circle cx="23" cy="18" r="0.9" fill="white"/>
                          <circle cx="25" cy="22" r="0.6" fill="white"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">Moonifest New Tab</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Manifest • Gratitude • Dreams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
