import Car from "../assets/car.png";
import Girl from "../assets/Girl.png";
import Vector from "../assets/Vector (1).png";
import CarHalf from "../assets/Car_Half.png";
import Road from "../assets/road.png";
import Ride from "../assets/Icon.png";
import Quick from "../assets/Icon (1).png";
import Ride1 from "../assets/Icon (2).png";
import Esay from "../assets/Icon (3).png";
import Quick1 from "../assets/Icon (4).png";
import Person from "../assets/Male.png";
import LeftCar from "../assets/LeftCar.png";
import PlayStor from "../assets/Google.png";
import AppStore from "../assets/App.png";
import logo from "../assets/logo.jpg";
import Slide1 from "../assets/Slider.png";
import Slide2 from "../assets/Slider1.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const tickerItems = [
  { text: "BOOK ONLINE NOW", dark: false },
  { text: "BOOK ONLINE NOW", dark: true },
  { text: "BOOK ONLINE NOW", dark: false },
  { text: "BOOK ONLINE NOW", dark: true },
  { text: "BOOK ONLINE NOW", dark: false },
  { text: "BOOK ONLINE NOW", dark: true },
  { text: "BOOK ONLINE NOW", dark: false },
  { text: "BOOK ONLINE NOW", dark: true },
];

const features = [
  {
    title: "Ride Customize",
    desc: "Digitalization has enabled Taxi booking providers to harness the power",
    icon: Ride,
  },
  {
    title: "Quick Pickup",
    desc: "Digitalization has enabled Taxi booking providers to harness the power",
    icon: Quick,
  },
  {
    title: "Ride Customize",
    desc: "Digitalization has enabled Taxi booking providers to harness the power",
    icon: Ride1,
  },
  {
    title: "Easy To Search",
    desc: "Digitalization has enabled Taxi booking providers to harness the power",
    icon: Esay,
  },
  {
    title: "Quick Support",
    desc: "Digitalization has enabled Taxi booking providers to harness the power",
    icon: Quick1,
  },
];

const StarIcon = ({ color }) => (
  <span
    className="w-3 h-3 flex-shrink-0 inline-block"
    style={{
      background: color,
      clipPath:
        "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
    }}
  />
);

export default function HeroSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert("Message sent successfully!");

      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message");
    }
  };

  const slides = [Slide1, Slide2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="w-full overflow-hidden">
      {/* ─────────────────────────────────────
          HERO — black background with car
      ───────────────────────────────────── */}
      <div
        className="relative w-full flex flex-col items-center"
        style={{ background: "linear-gradient(to bottom, #000 80%, #fff 50%)" }}
      >
        {/* Watermark */}
        <div
          className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 font-black whitespace-nowrap pointer-events-none select-none z-0"
          style={{
            fontSize: "clamp(60px, 20vw, 180px)",
            color: "rgba(255,238,2,0.05)",
            letterSpacing: "8px",
          }}
        >
          TAXI
        </div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-4 sm:px-6 pt-8 sm:pt-12 pb-2 sm:pb-4">
          <p className="text-[#FFEE02] text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] font-bold mb-2 sm:mb-3 uppercase">
            We are best taxi booking company
          </p>
          <h1
            className="text-white font-black leading-tight"
            style={{ fontSize: "clamp(22px, 5vw, 52px)" }}
          >
            Securely Book your Taxi Today
            <br />
            From Any Location
          </h1>
        </div>

        {/* Car image */}
        <div className="relative z-10 w-full flex justify-center mt-4 sm:mt-8 md:mt-12 lg:mt-20">
          <img
            src={Car}
            alt="Only Meter Taxi"
            className="w-[70%] max-w-[240px] sm:max-w-[360px] md:max-w-[500px] lg:max-w-[650px] h-auto object-contain"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────
          BOOKING FORM + TICKER STRIPS
      ───────────────────────────────────── */}
      <section
        id="home"
        className="relative w-full bg-white overflow-hidden py-16 sm:py-20 lg:py-24 flex justify-center items-center px-4"
      >
        {/* Ticker strips */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {/* Yellow strip */}
          <div
            className="absolute w-[120%] h-[40px] sm:h-[50px] md:h-[60px] bg-[#FDD20B] flex items-center overflow-hidden"
            style={{
              transform: "rotate(6deg)",
              top: "45%",
              left: "-10%", // centered to cover full width even when rotated
            }}
          >
            <div className="flex whitespace-nowrap animate-ticker">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 
                     text-[9px] sm:text-[11px] md:text-[12px] 
                     font-black tracking-widest text-black"
                >
                  <StarIcon color="#000" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Black strip */}
          <div
            className="absolute w-[120%] h-[40px] sm:h-[50px] md:h-[60px] bg-black flex items-center overflow-hidden"
            style={{
              transform: "rotate(-8deg)",
              top: "55%",
              left: "-10%",
            }}
          >
            <div className="flex whitespace-nowrap animate-ticker-reverse">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 
                     text-[9px] sm:text-[11px] md:text-[12px] 
                     font-black tracking-widest text-[#FDD20B]"
                >
                  <StarIcon color="#FDD20B" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Booking card */}
        <div
          className="relative z-20 backdrop-blur-sm bg-white/80 border border-gray-200 shadow-xl flex flex-col items-center text-center w-full"
          style={{
            maxWidth: "520px",
            borderRadius: "28px",
            padding: "clamp(20px, 5vw, 36px) clamp(16px, 5vw, 40px)",
            gap: "20px",
          }}
        >
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black leading-snug">
            Go anywhere with
            <span className="block text-xl sm:text-2xl md:text-3xl font-black text-black">
              Only Meter
            </span>
          </h2>

          <form
            className="w-full flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full h-10 sm:h-11 px-4 rounded-full bg-white border border-gray-200 outline-none text-sm"
            />
            <input
              type="tel"
              placeholder="Enter Contact Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full h-10 sm:h-11 px-4 rounded-full bg-white border border-gray-200 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Enter Email ID"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full h-10 sm:h-11 px-4 rounded-full bg-white border border-gray-200 outline-none text-sm"
            />

            {/* Message Field */}
            <textarea
              placeholder="Enter Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 rounded-2xl bg-white border border-gray-200 outline-none text-sm resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-1 mx-auto px-6 py-2 rounded-full bg-black text-[#FDD20B] font-bold text-sm hover:bg-gray-900 transition"
            >
              Contact Now →
            </button>
          </form>
        </div>
      </section>

      {/* ─────────────────────────────────────
          IMAGE SLIDER
      ───────────────────────────────────── */}
      <section
        id="about"
        className="w-full relative overflow-hidden mt-10 lg:mt-20"
      >
        {/* SLIDER CONTAINER */}
        <div
          className="
       relative w-full
 
    aspect-[5/2]        /* ✅ MOBILE (no cut) */
    sm:aspect-[16/9]    /* tablet */
    md:aspect-[18/6]    /* desktop */
    lg:aspect-[24/9]
 
    "
        >
          {slides.map((img, index) => (
            <img
             key={index} 
              src={img}
              alt="slide"
              className={`
    absolute top-0 left-0 w-full h-full
 
    object-contain md:object-cover   /* ✅ FIX */
 
    transition-opacity duration-700
    ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
  `}
            />
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="
      absolute top-1/2 -translate-y-1/2
      left-2
      bg-black/40 text-white
      w-7 h-7 sm:w-9 sm:h-9
      flex items-center justify-center
      rounded-full z-20
    "
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="
      absolute top-1/2 -translate-y-1/2
      right-2
      bg-black/40 text-white
      w-7 h-7 sm:w-9 sm:h-9
      flex items-center justify-center
      rounded-full z-20
    "
        >
          ›
        </button>

        {/* DOTS */}
        {/* <div
          className="
    absolute bottom-2
    left-1/2 -translate-x-1/2
    flex gap-2 z-20
  "
        >
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`
          rounded-full cursor-pointer transition-all
          ${current === i ? "bg-white w-4 h-2" : "bg-gray-400 w-2 h-2"}
        `}
            />
          ))}
        </div> */}
      </section>

      {/* ─────────────────────────────────────
          FEATURES SECTION
      ───────────────────────────────────── */}
      <div className="bg-[#f5f5f5] relative overflow-hidden mb-24 sm:mb-28 md:mb-32 lg:mb-40">
        <section
          id="services"
          className="max-w-[1400px] mx-auto relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[650px] mx-auto text-center mb-10 sm:mb-14"
          >
            <p className="text-xs sm:text-sm text-gray-400 uppercase mb-2">
              Our Features
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Check out our all Time <br />
              <span className="text-gray-600">Best Features</span>
            </h2>
          </motion.div>

          {/* Features grid */}
          <div className="max-w-[1151px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pb-8 sm:pb-12 lg:pb-16">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white/60 rounded-2xl p-5 sm:p-0 sm:bg-transparent sm:rounded-none"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-black transition">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Car half decoration — hidden on very small screens, shown md+ */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute z-0 bottom-[-40px] right-[-60px] sm:bottom-[-60px] sm:right-[-80px] md:bottom-[-80px] md:right-[-120px] lg:bottom-[-180px] lg:right-[-320px]  pointer-events-none"
          >
            <img
              src={CarHalf}
              alt="car"
              className="w-[200px] sm:w-[300px] md:w-[450px] lg:w-[800px] max-w-none object-contain opacity-70 sm:opacity-100"
            />
          </motion.div>
        </section>

        {/* Road images */}
        <div className="w-full flex overflow-hidden">
          <img
            src={Road}
            className="w-1/2 h-[120px] sm:h-[180px] md:h-[230px] object-cover"
            alt="road"
          />
          <img
            src={Road}
            className="w-1/2 h-[120px] sm:h-[180px] md:h-[230px] object-cover"
            alt="road"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────
          DRIVER CTA BANNER
      ───────────────────────────────────── */}
      <section className="w-full mt-6 sm:mt-10 md:mt-14 lg:mt-[-80px]">
        <div
          className="relative w-full"
          style={{
            background: "linear-gradient(99deg, #F0910E 0%, #FFBC5F 80%)",
            borderRadius: "16px",
            borderTopRightRadius: "clamp(60px, 12vw, 140px)",
            minHeight: "clamp(220px, 30vw, 340px)", // थोड़ा height बढ़ाया
            overflow: "visible", // ✅ FIX: allow image to overflow
          }}
        >
          {/* White decorative circle */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "clamp(220px, 44vw, 500px)",
              height: "clamp(220px, 44vw, 500px)",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.17)",
              right: "clamp(-60px, -7vw, -90px)",
              top: "clamp(-80px, -14vw, -150px)",
              zIndex: 1,
            }}
          />

          {/* Car */}
          <img
            src={LeftCar}
            alt="car"
            className="absolute bottom-0 left-0 pointer-events-none hidden sm:block"
            style={{
              width: "clamp(240px, 60vw, 500px)",
              transform: "translateX(-60%)",
              zIndex: 2,
              objectFit: "contain",
            }}
          />

          {/* Text */}
          <div
            className="relative flex flex-col justify-center"
            style={{
              zIndex: 10,
              paddingLeft: "clamp(24px, 14vw, 160px)",
              paddingRight: "clamp(24px, 30vw, 340px)",
              paddingTop: "clamp(28px, 4vw, 44px)",
              paddingBottom: "clamp(28px, 4vw, 44px)",
            }}
          >
            <h2
              className="font-black text-[#141414] leading-tight"
              style={{
                fontSize: "clamp(24px, 4vw, 48px)",
              }}
            >
              Flexible Hours &<br />
              High Earnings
            </h2>

            <p
              className="text-black/70"
              style={{
                marginTop: "clamp(8px, 1.2vw, 14px)",
                fontSize: "clamp(13px, 1.4vw, 16px)",
                maxWidth: "340px",
              }}
            >
              Join as a Rapido captain and earn on your own terms. Driver
              whenever you want.
            </p>

            <button
              className="self-start bg-[#141414] text-white font-extrabold rounded-xl hover:bg-[#2a2a2a] transition-colors"
              style={{
                marginTop: "clamp(14px, 2vw, 22px)",
                fontSize: "clamp(12px, 1.4vw, 15px)",
                padding: "clamp(9px, 1.2vw, 13px) clamp(18px, 2.5vw, 28px)",
              }}
            >
              Start Earning →
            </button>
          </div>

          {/* ✅ FIXED PERSON IMAGE */}
          <img
            src={Person}
            alt="driver"
            className="absolute right-0 pointer-events-none hidden sm:block"
            style={{
              height: "clamp(220px, 38vw, 420px)",
              bottom: "0",
              top: "-80px", // ✅ push upward so head is visible
              width: "auto",
              zIndex: 10,
              objectFit: "contain",
            }}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────
          APP DOWNLOAD
      ───────────────────────────────────── */}
      <section
        id="download"
        className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4"
      >
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-bold leading-tight text-[#111]">
            <span className="block text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px]">
              Get Free App on Online
            </span>
            <span className="block text-gray-500 text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px]">
              Download Now
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base max-w-[500px] mx-auto">
            Competently re-engineer cross-media breed meta-services
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              src={PlayStor}
              alt="Google Play"
              className="h-[42px] sm:h-[50px] object-contain cursor-pointer hover:scale-105 transition"
            />
            <img
              src={AppStore}
              alt="App Store"
              className="h-[42px] sm:h-[50px] object-contain cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          FOOTER
      ───────────────────────────────────── */}
      <footer
        id="contact"
        className="relative w-full bg-[#0c0c0c] text-white overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-20 pt-14 sm:pt-20 pb-28 sm:pb-36 lg:pb-48"
      >
        {/* Big background text */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden">
          <h1
            className="font-black w-full text-center text-transparent leading-none"
            style={{
              fontSize: "clamp(48px, 13vw, 300px)",
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
              letterSpacing: "clamp(-1px, -0.2vw, -4px)",
              lineHeight: "110%",
            }}
          >
            Only Meter
          </h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1300px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <img
                src={logo}
                alt="Only Meter"
                className="w-[120px] sm:w-[140px] mb-4 object-contain mix-blend-lighten"
              />
              <h4 className="font-semibold mb-2 mt-2 text-sm sm:text-base">
                Cab Service ONLY METER INDIA
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-[260px]">
                Modern taxi service connecting you across the city with premium
                rides, reliable drivers, and instant booking.
              </p>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Company
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  Rider
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  Driver
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Services
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition">
                  City rides
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  Outstation
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  Rental
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  Airport Pickup
                </li>
              </ul>
            </div>

            {/* Contact + Social Links (in one row) */}
            <div>
              <h5 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Contact
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition">
                  Pune Maharashtra
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  +91 94032 41963
                </li>
                <li className="cursor-pointer hover:text-white transition">
                  info@onlymeterindia.com
                </li>
                {/* Social links as a flex row */}

                <li className="flex gap-4 mt-6">
                  <span className="cursor-pointer hover:text-white transition text-gray-400 hover:text-white">
                    <FaFacebookF size={18} />
                  </span>
                  <span className="cursor-pointer hover:text-white transition text-gray-400 hover:text-white">
                    <FaInstagram size={18} />
                  </span>
                  <span className="cursor-pointer hover:text-white transition text-gray-400 hover:text-white">
                    <FaYoutube size={18} />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row – only copyright */}
          <div className="mt-10 sm:mt-8 flex justify-center sm:justify-start text-xs sm:text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Only Meter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
