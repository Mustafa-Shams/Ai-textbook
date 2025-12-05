# Tasks: AI-Native Textbook Generation

**Input**: Design documents from `/specs/001-textbook-generation/`

## Phase 1: Setup

- [ ] T001 [P] Initialize Docusaurus v3 project in `frontend/`
- [ ] T002 [P] Initialize FastAPI project in `backend/`
- [ ] T003 [P] Create `requirements.txt` in `backend/` with FastAPI, Qdrant-client, psycopg2-binary, LangChain
- [ ] T004 [P] Create project structure in `frontend/src/components` and `frontend/src/services`
- [ ] T005 [P] Create project structure in `backend/src/models`, `backend/src/services`, and `backend/src/api`

---

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T006 Configure Docusaurus for 4 chapters in `docusaurus.config.js`
- [ ] T007 Set up a free-tier Qdrant instance and configure connection in `backend/src/services/qdrant_service.py`
- [ ] T008 Set up a free-tier Neon Postgres instance and configure connection in `backend/src/services/postgres_service.py`
- [ ] T009 Create a basic FastAPI app in `backend/src/api/main.py` with a health check endpoint

---

## Phase 3: User Story 1 - Read Textbook Content (Priority: P1) 🎯 MVP

**Goal**: A readable online textbook with 4 chapters.
**Independent Test**: The Docusaurus site can be built and served locally, showing the 4 chapters with placeholder content.

### Implementation for User Story 1

- [ ] T010 [P] [US1] Create `docs/chapter1.md`, `docs/chapter2.md`, `docs/chapter3.md`, `docs/chapter4.md`
- [ ] T011 [US1] Add placeholder content to each chapter's Markdown file.
- [ ] T012 [US1] Configure the Docusaurus sidebar in `sidebars.js` to reflect the 4 chapters.

---

## Phase 4: User Story 2 - Integrated RAG Chatbot (Priority: P1)

**Goal**: A functional RAG chatbot that answers questions based on the textbook content.
**Independent Test**: A user can ask a question in the chatbot UI and receive an answer from the backend.

### Implementation for User Story 2

- [ ] T013 [P] [US2] Implement a service in `backend/src/services/embedding_service.py` to generate embeddings for textbook content.
- [ ] T014 [US2] Implement a script to process Markdown files, generate embeddings, and store them in Qdrant.
- [ ] T015 [US2] Implement the RAG pipeline logic in `backend/src/services/rag_service.py` using LangChain.
- [ ] T016 [US2] Implement the `/chat` endpoint in `backend/src/api/main.py` to handle chat messages.
- [ ] T017 [P] [US2] Create a chatbot UI component in `frontend/src/components/Chatbot.js`.
- [ ] T018 [US2] Integrate the chatbot component with the Docusaurus site and connect it to the backend API.

---

## Phase 5: User Story 3 - Select-to-Ask (Priority: P2)

**Goal**: Allow users to select text and ask the AI about it.
**Independent Test**: A user can select text, click an "Ask AI" button, and the chatbot will open with the selected text.

### Implementation for User Story 3

- [ ] T019 [P] [US3] Create `TextSelectionPopup.js` component in `frontend/src/components/`.
- [ ] T020 [P] [US3] Create `MarkdownContentWrapper.js` component in `frontend/src/components/`.
- [ ] T021 [US3] Swizzle the `MDXContent` component to use the `MarkdownContentWrapper.js`.
- [ ] T022 [US3] Integrate the popup with the chatbot UI to pre-fill the selected text.

---

## Phase 6: User Story 4 - Personalization (Priority: P3, Optional)

**Goal**: Add personalization features to the textbook.
**Independent Test**: The personalization features can be used to change the UI and track progress.

### Implementation for User Story 4

- [ ] T023 [P] [US4] Implement dark/light mode toggle in Docusaurus.
- [ ] T024 [P] [US4] Implement a placeholder for the Urdu translation toggle.
- [ ] T025 [P] [US4] Implement a basic progress tracking mechanism (e.g., using localStorage).

---

## Phase 7: Polish & Cross-Cutting Concerns

- [ ] T026 [P] Write Pytests for the backend API endpoints in `backend/tests/`.
- [ ] T027 [P] Write Jest/React Testing Library tests for the frontend components in `frontend/tests/`.
- [ ] T028 Configure GitHub Actions for CI/CD to deploy the frontend to GitHub Pages.
- [ ] T029 Configure the backend for deployment on Render/Railway.
- [ ] T030 Final QA and health checks of the deployed application.

---

## Dependencies & Execution Order

- **Phase 1 & 2**: Can be done in parallel, but must be completed before Phase 3.
- **Phase 3 (US1)**: Can start after Phase 2.
- **Phase 4 (US2)**: Depends on Phase 3.
- **Phase 5 (US3)**: Depends on Phase 4.
- **Phase 6 (US4)**: Can be done in parallel with other user story phases after Phase 2.
- **Phase 7**: Should be done after all other phases are complete.

## Implementation Strategy

### MVP First (User Story 1 & 2)

1.  Complete Phase 1 & 2.
2.  Complete Phase 3 (User Story 1).
3.  Complete Phase 4 (User Story 2).
4.  **STOP and VALIDATE**: Test the core textbook reading and chatbot functionality.

### Incremental Delivery

1.  Deliver the readable textbook (US1).
2.  Add the RAG chatbot (US2).
3.  Add the select-to-ask feature (US3).
4.  Add personalization features (US4).
5.  Deploy and finalize.
