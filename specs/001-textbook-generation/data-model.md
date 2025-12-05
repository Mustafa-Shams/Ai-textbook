# Data Model: AI-Native Textbook Generation

This document describes the data model for the AI-Native Textbook Generation feature.

## Entities

### Textbook
The top-level container for all content.
- **Attributes**:
    - `title` (string): The title of the textbook.
    - `chapters` (array of Chapter): A list of chapters in the textbook.

### Chapter
A main section of the textbook.
- **Attributes**:
    - `id` (string): A unique identifier for the chapter.
    - `title` (string): The title of the chapter.
    - `contentBlocks` (array of ContentBlock): A list of content blocks in the chapter.

### ContentBlock
A paragraph, list, or code snippet within a chapter, stored in Markdown.
- **Attributes**:
    - `id` (string): A unique identifier for the content block.
    - `content` (string): The Markdown content of the block.
    - `embedding` (Embedding): The vector embedding of the content.

### Embedding
A vector representation of a content block used for chatbot retrieval.
- **Attributes**:
    - `id` (string): A unique identifier for the embedding.
    - `vector` (array of float): The vector representation of the content.
    - `contentBlockId` (string): The ID of the associated content block.

### ChatbotInteraction
A record of a user's question and the chatbot's response.
- **Attributes**:
    - `id` (string): A unique identifier for the interaction.
    - `question` (string): The user's question.
    - `answer` (string): The chatbot's answer.
    - `timestamp` (datetime): The time of the interaction.
    - `sourceContentBlockIds` (array of string): A list of content block IDs used to generate the answer.
