"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import Button from "../components/button/Button";
import styles from "./contact.module.css";
import { sendContactMessage } from "../service/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { name: "", email: "", message: "" };
    const emailRegex = /\S+@\S+\.\S+/;
    let hasError = false;

    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio";
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = "El email es obligatorio";
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
      hasError = true;
    }
    if (!formData.message) {
      newErrors.message = "El mensaje es obligatorio";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      await sendContactMessage(formData);
      alert("Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      }
  };

  return (
    <div className={styles.container}>
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className={styles.leftSide}>
            <p className={styles.subtitle}>Get in Touch</p>
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.description}>
              Have a project in mind or just want to say hi? Send me a message and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4">
                <div className={styles.iconBox}>
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className={styles.infoTitle}>Email</p>
                  <p className={styles.infoSubtitle}>cyber@developer.io</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={styles.iconBox}>
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className={styles.infoLabel}>Response Time</p>
                  <p className={styles.infoText}>Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSide}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name */}
              <div className="space-y-1">
                <label className={styles.label}>
                  <User color="#00cccc" className="w-4 h-4 text-primary inline-block mr-1" />
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles.input}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-1 mt-4">
                <label className={styles.label}>
                  <Mail color="#00cccc" className="w-4 h-4 text-primary inline-block mr-1" />
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={styles.input}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-1 mt-4">
                <label className={styles.label}>
                  <MessageSquare color="#00cccc" className="w-4 h-4 text-primary inline-block mr-1" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={styles.textarea}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className={styles.button}>
                <Send color="#000000" className="w-4 h-4 text-primary inline-block mr-1" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
