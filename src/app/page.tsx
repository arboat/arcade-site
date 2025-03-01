"use client";

import { ScrambleText } from "@/components/scramble-text";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const navigation = [
  {
    name: "Blog",
    href: "/blog",
    description: "Read my thoughts and experiences",
  },
  {
    name: "GitHub Analysis",
    href: "/github-analysis",
    description: "Analyze GitHub repositories and users",
  },
  {
    name: "Experimental Arcade",
    href: "/experimental-arcade",
    description: "Play with experimental web technologies",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
      <div className="w-full max-w-4xl">
        <div className="mb-16 flex h-[200px] flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ScrambleText
              text="An Arcade Of Some"
              delay={400}
              className="bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-6xl font-bold text-transparent"
            />
            <br />
            <ScrambleText
              text="Interesting Stuff"
              delay={800}
              className="bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-5xl font-bold text-transparent"
            />
          </motion.h1>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="no-underline">
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground sm:text-2xl">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
