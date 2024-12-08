# Peerlist Frontend Developer Assignment

Create a Next.js application for a form builder that allows users to create, preview, fill out, and submit forms.

## Task Overview

### Functional Requirements 

- [ ] Create a new form by selecting input types and adding questions (short answer, long answer, single select, number, URL, date)
- [ ] Add a title for the form.
- [ ] Change the question type after adding a question by clicking on the question type icon and selecting a different type from the dropdown menu.
- [ ] Reorder the questions in the form creation page using drag and drop functionality.
- [ ] Publish the form or save it as a draft.
- [ ] Preview the created form and fill it out.
- [ ] See the completeness percentage of the form while filling it out.
- [ ] Submit the form and see a success message after submission.
- [ ] View submitted forms in a table with details such as submission date and form title and view the submitted form details.

### Non-Functional Requirements
- [ ] Ensure responsiveness and compatibility with mobile devices.
- [ ] Follow best practices for web accessibility.
- [ ] Include visually appealing elements with micro-interactions.
- [ ] Maintain consistent application state throughout the user experience.
- [ ] Allow abtraction to extend more question types in the future.

### Extra Features

- [ ] Template forms that user can select and start from there instead of creating a form from scratch.
- [ ] Feature to duplicate/delete a question in the form creation page.
- [ ] Sorting and searching options in the form submissions page.

### Tech Stack Used

- Nextjs/Typescript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Context API for state management

### Assumptions / Constraints

- No complex validation for form fields (e.g., email, password). All fields are required by default.
- No support for word limits in text fields.
- No support for conditional logic in form fields.
- Form submissions are stored in local storage, not in a database.
- Draft forms are saved in local storage and can be retrieved later.
- Publishing a form redirects the user to the form preview page, but preview is also available in the form creation page.

## UI Breakdown

### Form Creation Page

 This page is  where the user can create a new form by adding questions and selecting input types. The user can also reorder the questions and change the question type after adding a question. The user can save the form as a draft or publish it.

 ***Components***
   - `FormHeader.tsx`
   - `FormDesigner.tsx`
   - `FormFooter.tsx`

### Form Preview Page
This page is where the user can preview the created form and fill it out. The user can see the completeness percentage of the form while filling it out.

 ***Components***
   - `FormHeader.tsx`
   - `FormPreview.tsx`


### Form Submissions Page
This page is where the user can view submitted forms in a table with details such as submission date and form title and view the submitted form details.

**Components**
   - `FormSubmissions.tsx`



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

   

## Folder Structure

The project is structured as follows:

```

```

