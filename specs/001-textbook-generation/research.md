# Research: AI-Native Textbook Generation

This document outlines the research conducted for the AI-Native Textbook Generation feature.

## "Select-text-to-ask-AI" Feature Implementation

**Decision**: Implement the "select-text-to-ask-AI" feature using a custom React component that wraps Docusaurus's `MDXContent` component.

**Rationale**: This approach allows for a seamless integration with Docusaurus's existing rendering pipeline. By "swizzling" the `MDXContent` component, we can apply the text selection functionality globally across all Markdown content without needing to modify individual pages. This is a clean and maintainable solution that leverages Docusaurus's theming capabilities.

**Implementation Details**:
1.  **`TextSelectionPopup.js`**: A React component to display the "Ask AI" button when text is selected.
2.  **`MarkdownContentWrapper.js`**: A wrapper component that listens for text selection events and manages the visibility and position of the popup.
3.  **Swizzling `MDXContent`**: The `MDXContent` component from `@docusaurus/theme-classic` will be swizzled to wrap the content with `MarkdownContentWrapper`.

**Alternatives considered**:
- **Using a third-party library**: While there are libraries for text selection and popups, a custom implementation provides more control and avoids adding unnecessary dependencies to the project.
- **Modifying Docusaurus core**: Directly modifying the Docusaurus core is not recommended as it would make future updates difficult. Swizzling is the recommended approach for customizing Docusaurus components.
