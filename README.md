👩🏽‍🍳 Chef Up
Chef Up is a mobile-first app designed to help beginner cooks log, track, and master real-world kitchen skills. Built with React Native, Expo, and Expo Router, the app provides a simple way to track progress, practice consistently, and build culinary confidence.

📱 Features
➕ Log a new cooking skill with notes and optional photo

📋 View your full skill library

✅ Practice tracking with mastery message after 10 sessions

📸 Photo gallery of all logged skill images

💾 Persistent local storage using AsyncStorage

🧭 Navigation using Expo Router

🌈 Clean design using consistent fonts and colors

🚀 Technologies Used
React Native

Expo & Expo Go

Expo Router

AsyncStorage

Expo Image Picker

Google Fonts (Poppins + Lobster)

FlatList, useState, useContext, useEffect

📁 Project Structure
bash
Copy
Edit
app/
  index.tsx               # Home screen
  _layout.tsx             # App shell (fonts, routing, context)
  skill/
    index.tsx             # View logged skills
    log.tsx               # Add a new skill
    [id].tsx              # View & practice a skill
  photo-library/
    index.tsx             # Image grid
constants/
  colors.ts               # App-wide colors
  fonts.ts                # Font mapping
contexts/
  SkillContext.tsx        # Global state + AsyncStorage logic
🛠 Getting Started

To run the app locally:

Clone this repo

Run npm install

Start with npx expo start

Scan QR code with Expo Go or open in web browser
