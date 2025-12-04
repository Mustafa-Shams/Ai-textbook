---
id: 001
title: Create Initial Project Constitution
stage: constitution
date: 2025-12-05
surface: agent
model: gemini-pro
feature: none
branch: master
user: user
command: /sp.constitution PROJECT CONSTITUTION: Physical AI & Humanoid Robotics Textbook (4-Chapter Edition) | VISION: Create a concise, modern, AI-Native textbook from foundational robotics to VLA-driven humanoid control. Must be simple, reliable, and powered by an integrated RAG chatbot. | CORE PRINCIPLES: Clarity; Accuracy; Minimalism; Practicality; Maintainability. | SCOPE (4 Chapters): 1. Physical AI Foundations (embodiment, sensing, actuation); 2. ROS 2 Essentials (nodes, topics, TF, services); 3. Digital Twin Simulation (Gazebo/Isaac Sim, URDF/SDF); 4. VLA + Capstone Pipeline (Vision-Language-Action concepts). | REQUIRED DELIVERABLES: Docusaurus v3 website; Auto sidebar/navigation; Fully integrated free-tier RAG chatbot; Select-text → Ask AI support; GitHub Pages deployment. | KEY FEATURES/TECH: Docusaurus UI; Qdrant (Free Tier) vector DB; Neon Serverless Postgres (Free Tier); FastAPI backend; Chapter-level embeddings; Highlight-to-question chatbot integration. | CONSTRAINTS: Must deploy on GitHub Pages; Backend must run on free-tier platforms (Railway/Render); All embeddings strictly from textbook content; No GPU-required workflows; All API calls within free-tier limits. | SUCCESS CRITERIA: Book builds without errors; Chatbot retrieves accurate, book-only answers; GitHub Pages deployment succeeds; Backend deploys with working health checks; Select-text workflow smooth. | GENERATE FULL CONSTITUTION.
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - 
---

## Prompt

/sp.constitution PROJECT CONSTITUTION: Physical AI & Humanoid Robotics Textbook (4-Chapter Edition) | VISION: Create a concise, modern, AI-Native textbook from foundational robotics to VLA-driven humanoid control. Must be simple, reliable, and powered by an integrated RAG chatbot. | CORE PRINCIPLES: Clarity; Accuracy; Minimalism; Practicality; Maintainability. | SCOPE (4 Chapters): 1. Physical AI Foundations (embodiment, sensing, actuation); 2. ROS 2 Essentials (nodes, topics, TF, services); 3. Digital Twin Simulation (Gazebo/Isaac Sim, URDF/SDF); 4. VLA + Capstone Pipeline (Vision-Language-Action concepts). | REQUIRED DELIVERABLES: Docusaurus v3 website; Auto sidebar/navigation; Fully integrated free-tier RAG chatbot; Select-text → Ask AI support; GitHub Pages deployment. | KEY FEATURES/TECH: Docusaurus UI; Qdrant (Free Tier) vector DB; Neon Serverless Postgres (Free Tier); FastAPI backend; Chapter-level embeddings; Highlight-to-question chatbot integration. | CONSTRAINTS: Must deploy on GitHub Pages; Backend must run on free-tier platforms (Railway/Render); All embeddings strictly from textbook content; No GPU-required workflows; All API calls within free-tier limits. | SUCCESS CRITERIA: Book builds without errors; Chatbot retrieves accurate, book-only answers; GitHub Pages deployment succeeds; Backend deploys with working health checks; Select-text workflow smooth. | GENERATE FULL CONSTITUTION.

## Response snapshot

Created the initial project constitution at .specify/memory/constitution.md (v1.0.0).

## Outcome

- ✅ Impact: High. Established the foundational principles and scope for the project.
- 🧪 Tests: N/A.
- 📁 Files: 1 created.
- 🔁 Next prompts: N/A.
- 🧠 Reflection: The process was smooth. The user provided all necessary information.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
