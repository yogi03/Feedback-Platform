# Feedback Platform - Widget

A lightweight, embeddable feedback widget built with **React** and **Vite**, using **Supabase** for real-time data storage. This project is designed to be embedded into external websites to collect user feedback efficiently.

## 🚀 Tech Stack

* **Frontend Framework:** React.js
* **Build Tool:** Vite
* **Backend/Database:** Supabase
* **Styling:** CSS / Tailwind (if applicable)
* **Packaging:** Custom Web Component (`web-component.jsx`)

## 📂 Project Structure

Based on the current repository layout:

* `/src/components/ui`: Reusable UI components (e.g., Widget.jsx).
* `/src/lib`: Utilities and configuration files.
* `/src/web-component.jsx`: Entry point for bundling the widget as a custom HTML element.
* `supabaseClient.js`: Configuration for connecting to the Supabase backend.

## 🛠️ Getting Started

### Prerequisites

* Node.js installed (v16+ recommended).
* A Supabase project set up.

### 1. Clone the Repository
git clone [repo](https://github.com/yogi03/Feedback-Platform.git)
cd feedback-platform

### 2. Install Dependencies
npm install

### 3. Environment Setup
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

### 4. Run Deployment Server
npm run dev

Open your browser to http://localhost:5173 (or the port shown in your terminal).
