# Quickstart: AI-Native Textbook Generation

This guide provides instructions for setting up the development environment for the AI-Native Textbook Generation project.

## Prerequisites

- Node.js (v18 or later)
- Yarn
- Python 3.11
- Pip

## Frontend Setup (Docusaurus)

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    yarn install
    ```
3.  Start the development server:
    ```bash
    yarn start
    ```
    The Docusaurus site will be available at `http://localhost:3000`.

## Backend Setup (FastAPI)

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Create a virtual environment:
    ```bash
    python -m venv venv
    ```
3.  Activate the virtual environment:
    -   Windows: `venv\Scripts\activate`
    -   macOS/Linux: `source venv/bin/activate`
4.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5.  Start the development server:
    ```bash
    uvicorn src.api.main:app --reload
    ```
    The FastAPI server will be available at `http://localhost:8000`.

## Running the Full Application

To run the full application, you will need to have both the frontend and backend servers running simultaneously. You will also need to configure the frontend to proxy API requests to the backend. This can be done by adding a `proxy` field to the `docusaurus.config.js` file in the `frontend` directory.
