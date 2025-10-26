"use client";

import { useRouter, useParams } from "next/navigation";
import { projects } from "@/app/constant/projects";

const Details = () => {
  const router = useRouter();
  const { slug } = useParams(); 

  const myElement = projects.find((project) => project.slug === slug);

  if (!myElement) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <p>Project not found 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full glass-card rounded-xl p-8">
        <img
          src={myElement.image}
          alt={myElement.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-4xl font-display font-bold text-primary mb-4">
          {myElement.title}
        </h1>
        <p className="text-foreground/70 text-lg leading-relaxed mb-6">
          {myElement.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {myElement.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 border border-primary/30 rounded-full text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => router.push("/projects")}
          className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition-all"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default Details;
