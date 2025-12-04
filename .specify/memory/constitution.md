<!--
---
sync_impact_report:
  version_change: "0.0.0 → 1.0.0"
  modified_principles:
    - "Clarity (New)"
    - "Accuracy (New)"
    - "Minimalism (New)"
    - "Practicality (New)"
    - "Maintainability (New)"
  added_sections:
    - "Core Principles"
    - "Scope, Deliverables, and Technology"
    - "Constraints and Success Criteria"
    - "Governance"
  removed_sections: []
  updated_templates:
    - path: ".specify/templates/plan-template.md"
      status: "✅"
    - path: ".specify/templates/spec-template.md"
      status: "✅"
    - path: ".specify/templates/tasks-template.md"
      status: "✅"
  todos: []
---
-->
# Physical AI & Humanoid Robotics Textbook (4-Chapter Edition) Constitution

## Vision

Create a concise, modern, AI-Native textbook from foundational robotics to VLA-driven humanoid control. Must be simple, reliable, and powered by an integrated RAG chatbot.

## Core Principles

### I. Clarity
The textbook must be written in simple, accessible language, avoiding unnecessary jargon. Concepts should be explained with clear, real-world examples.

### II. Accuracy
All technical information, code examples, and theoretical explanations must be factually correct and up-to-date.

### III. Minimalism
The content should be focused and concise. "You Aren't Gonna Need It" (YAGNI) is a key principle. Avoid content that is not essential to the core learning objectives.

### IV. Practicality
The textbook must provide hands-on, practical examples and projects that readers can build and experiment with.

### V. Maintainability
The accompanying code and the textbook itself must be easy to update and maintain over time. This includes clear documentation, modular code, and a consistent structure.

## Scope, Deliverables, and Technology

### Scope (4 Chapters)
1.  Physical AI Foundations (embodiment, sensing, actuation)
2.  ROS 2 Essentials (nodes, topics, TF, services)
3.  Digital Twin Simulation (Gazebo/Isaac Sim, URDF/SDF)
4.  VLA + Capstone Pipeline (Vision-Language-Action concepts)

### Required Deliverables
- Docusaurus v3 website
- Auto sidebar/navigation
- Fully integrated free-tier RAG chatbot
- Select-text → Ask AI support
- GitHub Pages deployment

### Key Features/Tech
- Docusaurus UI
- Qdrant (Free Tier) vector DB
- Neon Serverless Postgres (Free Tier)
- FastAPI backend
- Chapter-level embeddings
- Highlight-to-question chatbot integration

## Constraints and Success Criteria

### Constraints
- Must deploy on GitHub Pages
- Backend must run on free-tier platforms (Railway/Render)
- All embeddings strictly from textbook content
- No GPU-required workflows
- All API calls within free-tier limits

### Success Criteria
- Book builds without errors
- Chatbot retrieves accurate, book-only answers
- GitHub Pages deployment succeeds
- Backend deploys with working health checks
- Select-text workflow smooth

## Governance

This Constitution is the single source of truth for project scope, principles, and technical architecture. Amendments require a documented proposal, review, and approval by the project lead. A migration plan is required for any changes impacting existing architecture or content. All development work, pull requests, and reviews must explicitly verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-05 | **Last Amended**: 2025-12-05