"use client";

import { useRouter } from "next/navigation";
import styles from "./nav.module.css"
import { House, Briefcase, Mail } from 'lucide-react';

export const NavBar = () => {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <button
          onClick={() => handleNavigation("/")}
          className={styles.brandon}>
          Brandon.dev
        </button>

        {/* Navegación simple */}
        <div className="flex gap-6">
          <button
            onClick={() => handleNavigation("/") }
            className={styles.navigation}
          >
            <House />
            Home
          </button>

          <button
            onClick={() => handleNavigation("/projects")}
            className={styles.navigation}
          >
            <Briefcase /> Projects
          </button>

          <button
            onClick={() => handleNavigation("/contact")}
            className={styles.navigation}
          >
               <Mail /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
