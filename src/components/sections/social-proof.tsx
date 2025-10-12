"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    content: "Moonifest has completely transformed my manifestation practice. The 369 method keeps me consistent and the gratitude journal brings so much positivity to my day.",
    author: "Sarah M.",
    avatar: "SM"
  },
  {
    content: "I love how everything is in one place. The habit tracker is exactly what I needed, and the dream goals feature keeps me focused on my vision.",
    author: "Michael R.",
    avatar: "MR"
  },
  {
    content: "The interface is beautiful and intuitive. It's like having a manifestation coach right in my browser tab every day.",
    author: "Emily L.",
    avatar: "EL"
  }
];

const avatarGroup = [
  { initials: "JD", color: "bg-yellow-500" },
  { initials: "AK", color: "bg-orange-500" },
  { initials: "LS", color: "bg-blue-500" },
  { initials: "MR", color: "bg-green-500" },
  { initials: "CW", color: "bg-pink-500" },
  { initials: "TP", color: "bg-purple-500" },
];

export default function SocialProof() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* User count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                {avatarGroup.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full ${avatar.color} flex items-center justify-center text-white text-sm font-medium border-2 border-background`}
                  >
                    {avatar.initials}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium border-2 border-background">
                  +2.5k
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Loved by <span className="font-semibold text-foreground">5,000+ users</span> worldwide
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">Verified User</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
