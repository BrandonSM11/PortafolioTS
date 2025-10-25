"use client";

import { ArrowRight } from "lucide-react";
import Button from "./components/button/Button";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-15 items-center">
          <div className={styles.imageWrapper}>
            <img
              src="https://st4.depositphotos.com/14018410/25558/v/1600/depositphotos_255588822-stock-illustration-hex-code-stream-random-hexadecimal.jpg"
              alt="Developer Profile"
              className={styles.image}
            />
          </div>


          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <p className={styles.subtitle}>Welcome to my portfolio</p>
              <h1 className={styles.title}>
                Brandon
                <br />
                Developer
              </h1>
            </div>

            <p className={styles.description}>
              Crafting immersive digital experiences with cutting-edge technology.
              Specialized in futuristic web applications, cyberpunk aesthetics, and
              innovative UI/UX design.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className=""
                onClick={() => router.push("/projects")}
              >
                <div className="flex items-center gap-2 ">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className=""
                onClick={() => router.push("/contact")}
              >
                Contact me!
              </Button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div>
                <p className={styles.statValue}>5+</p>
                <p className={styles.statLabel}>Years Experience</p>
              </div>
              <div>
                <p className={styles.statValue}>50+</p>
                <p className={styles.statLabel}>Projects Completed</p>
              </div>
              <div>
                <p className={styles.statValue}>100%</p>
                <p className={styles.statLabel}>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
