# Peerlist Frontend Developer Assignment

Create a Next.js application for a form builder that allows users to create, preview, fill out, and submit forms.


## Design Philosophy

The design philosophy is inspired by peerlist.io, featuring a centered, minimalistic layout focused on usability and functionality. The primary color is green, with white as the secondary color. The design emphasizes readability with ample white space, simple typography, rounded corners, and shadows. Micro-interactions enhance user engagement.

## Task Overview

### Functional Requirements

- [ ] Create a new form by selecting input types and adding questions (short answer, long answer, single select, number, URL, date)
- [ ] Add a title for the form.
- [ ] Change the question type after adding a question by clicking on the question type icon and selecting a different type from the dropdown menu.
- [ ] Reorder the questions in the form creation page using drag and drop functionality.
- [ ] Publish or save the form as a draft.
- [ ] Preview the created form and fill it out.
- [ ] See the completeness percentage of the form while filling it out.
- [ ] Submit the form and see a success message after submission.
- [ ] View submitted forms in a table with details such as submission date and form title and view the submitted form details.

### Non-Functional Requirements

- [ ] Ensure responsiveness and compatibility with mobile devices.
- [ ] Follow best practices for web accessibility.
- [ ] Include visually appealing elements with micro-interactions.
- [ ] Maintain consistent application state throughout the user experience.
- [ ] Design the system to be easily extendable for adding more question types in the future.

### Extra Features

- [ ] Template forms that users can select to start from instead of creating a form from scratch.
- [ ] Feature to duplicate or delete a question in the form creation page.
- [ ] Reset button to clear all the form fields in the form creation page.
- [ ] Sorting and searching options in the form submissions page.

### Tech Stack Used

- Nextjs/Typescript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Context API for state management

### Assumptions / Constraints

- Icons may not match with the mockup, so the closest available icons are used.
- No complex validation for form fields (e.g., email, password). All fields are required by default.
- No support for word limits in text fields.
- No support for conditional logic in form fields.
- Save as draft only triggers a response message and does not save the form.
- Publishing a form redirects the user to the form preview page, but preview is also available in the form creation page.


---

## Buissness Logic

### Form Creation Page

This page is where the user can create a new form by adding questions and selecting input types. The user can also reorder the questions and change the question type after adding a question. The user can save the form as a draft or publish it.

**_Components_**

- `FormHeader.tsx`
- `FormDesigner.tsx`
- `FormFooter.tsx`

### Form Preview Page

This page is where the user can preview the created form and fill it out. The user can see the completeness percentage of the form while filling it out.

**_Components_**

- `FormHeader.tsx`
- `FormPreview.tsx`

### Form Submissions Page

This page is where the user can view submitted forms in a table with details such as submission date and form title and view the submitted form details.

**Components**

- `FormSubmissions.tsx`

### State Management

The application uses the Context API for state management. The `FormContext` provider is used to manage the form state, including the form title, questions, and form submissions data.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Folder Structure

The project is structured as follows:

```sh
/app
   - /api                    # Mock API routes
      - saveForm
         - route.ts
   - /preview                # Form preview page
      - page.tsx
   - /submissions          # Form submissions page
      - page.tsx
   - layout.tsx
   - page.tsx              # Form creation page
   - styles
      - globals.css
/components
   - /form                # Form related components
      - FormDesigner.tsx
      - FormPreview.tsx
      - FormSubmissions.tsx
   - /layout             # Layout components
      - FormHeader.tsx
      - FormFooter.tsx
      - PreviewHeader.tsx
   - /question           # Question related components
      - QuestionCard.tsx
      - QuestionMenu.tsx
      - QuestionTypeSelect.tsx
   - /shared            # Shared components
      - animated-container.tsx
      - template-menu.tsx
      - reset-button.tsx
   - /ui
/context               # Context API for state management
   - FormContext.tsx
/lib                   # Utility functions
   - formTemplates.ts
   - questionTypes.ts
   - types.ts
```

---