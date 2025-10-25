import { ExternalLink, Github } from "lucide-react";
import Button from "../components/button/Button";
import styles from "./project.module.css"

const projects = [
  {
    id: 1,
    title: "Neural Network Dashboard",
    description: "Real-time AI analytics platform with cyberpunk UI and data visualization",
    tech: ["React", "TypeScript", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Crypto Trading Terminal",
    description: "Advanced cryptocurrency trading interface with real-time market data",
    tech: ["Next.js", "WebSockets", "Chart.js"],
    image: "https://images.unsplash.com/photo-1642790551116-18e150f248e8?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Cybersecurity Hub",
    description: "Threat detection and monitoring system with futuristic design",
    tech: ["Vue.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "AR Experience Platform",
    description: "Immersive augmented reality web application for virtual showcases",
    tech: ["Three.js", "WebXR", "React"],
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Smart City IoT Dashboard",
    description: "IoT device management and monitoring for smart city infrastructure",
    tech: ["React", "MQTT", "D3.js"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Blockchain Explorer",
    description: "Next-gen blockchain transaction explorer with advanced search",
    tech: ["React", "Web3.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-10 px-5">
      <div className="container mx-auto max-w-7xl">
        <div className=" text-center">
          <p className="text-primary font-display text-lg tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-glow mb-4">
            Featured Projects
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto py-1.5">
            Explore my collection of futuristic web applications and digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card p-1 rounded-xl group hover:neon-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-lg overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  from-card to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border bg-background/80 hover:bg-primary/20"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border bg-background/80 hover:bg-primary/20"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech}
                        className="px-3 py-1 text-xs font-display bg-primary/10 border border-primary/30 rounded-full text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from 'react'


