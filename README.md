
# Peerlist Frontend Developer Assignment

## Introduction  
This assignment involves creating a Next.js application for a form builder that allows users to create, preview, fill out, and submit forms.





---
## Table of Contents

- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Key Features](#key-features)
- [Extra Features](#extra-features)
- [Tech Stack](#tech-stack)
- [Design Philosophy](#design-philosophy)
- [Business Logic](#business-logic)
- [State Management](#state-management)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Assumptions and Constraints](#assumptions-and-constraints)


---

## Screenshots

<table>
   <tr>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/Home.png" alt="Create Form Page" width="400"/><br/>
         <p style="text-align:center;">Form Designer</p>
      </td>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/Home-Dropdown.png" alt="Create Form Dropdown" width="400"/><br/>
         <p style="text-align:center;">Question Type Dropdown</p>
      </td>
   </tr>
   <tr>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/Preview.png" alt="Form Preview" width="400"/><br/>
         <p style="text-align:center;">Form Preview</p>
      </td>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/Submission.png" alt="Form Submissions" width="400"/><br/>
         <p style="text-align:center;">Form Submissions</p>
      </td>
   </tr>
   <tr>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/Submission2.png" alt="Form Submission Details" width="400"/><br/>
         <p style="text-align:center;">Form Submission Details</p>
      </td>
      <td>
         <img src="https://github.com/suryanshsingh2001/peerlist/blob/master/showcase/FormTemplates.png" alt="Form Templates" width="400"/><br/>
         <p style="text-align:center;">Form Templates</p>
      </td>
   </tr>
</table>




## Key Features  

### Functional Requirements  
- [X] **Form Creation:**  
  - [X] Add input types and questions (e.g., Short Answer, Long Answer, Single Select, Number, URL, Date) and title for the form.  
  - [X] Modify question types via a dropdown menu.  
  - [X] Drag-and-drop functionality to reorder questions.  
  - [X] Save the form as a draft or publish it.  

- [X] **Form Preview and Submission:**  
  - [X] Preview the form before publishing.  
  - [X] Fill out the form with a completeness progress indicator.  
  - [X] Submit the form and view a success message.  

- [X] **View Submissions:**  
  - [X] Access a table of submitted forms showing details like submission date and title.  
  - [X] View specific submission details.  

### Non-Functional Requirements  
- [X] Responsive design for mobile and desktop.  
- [X] Web accessibility best practices.  
- [X] Seamless micro-interactions for enhanced user experience.  
- [X] Consistent application state management.  
- [X] Scalability for future extensions (e.g., additional question types).  

---

## Extra Features  
- **Templates:** Start with pre-built forms.  
- **Question Management:** Duplicate or delete questions.  
- **Reset:** Clear all fields with a reset button.  
- **Enhanced Submissions:** Sort and search through form submissions.  

---

## Tech Stack  

- **Framework:** Next.js with TypeScript.  
- **Styling:** Tailwind CSS and Shadcn UI.  
- **Animation:** Framer Motion.  
- **State Management:** Context API.  

---

## Design Philosophy  

The design follows a **minimalistic, centered layout** inspired by [peerlist.io](https://peerlist.io).  

Key principles include:  
- **Colors:** Green as primary, white as secondary.  
- **Typography:** Simple and readable.  
- **Space:** Generous white space for clarity.  
- **UI Elements:** Rounded corners and subtle shadows.  
- **Micro-interactions:** Engaging, non-intrusive animations.  

---

## Business Logic  

### 1. Form Creation Page  
**Purpose:** Build and organize the form.  
- Add/edit/delete questions.  
- Change question types.  
- Reorder using drag-and-drop.  
- Save drafts or publish.  

**Components:**  
- `FormHeader.tsx`  
- `FormDesigner.tsx`  
- `FormFooter.tsx`  

### 2. Form Preview Page  
**Purpose:** Preview and fill out the form.  
- Progress bar for form completion.  

**Components:**  
- `FormHeader.tsx`  
- `FormPreview.tsx`  

### 3. Form Submissions Page  
**Purpose:** Manage submitted forms.  
- View submission details.  
- Sort and search submissions.  

**Components:**  
- `FormSubmissions.tsx`  

---

## State Management  

State is managed using the **Context API**, centralized in `FormContext`. It handles:  
- Form title and questions.  
- Form answers.  
- Submitted form data.  

---

## Setup Instructions  

1. **Install Dependencies:**  
   ```bash
   npm install
   ```  

2. **Run the Development Server:**  
   ```bash
   npm run dev
   ```  
   Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## Project Structure  

```plaintext
/app
   ├── /api                # Mock API routes
   │     └── saveForm
   │         └── route.ts
   ├── /preview            # Form preview page
   │     └── page.tsx
   ├── /submissions        # Form submissions page
   │     └── page.tsx
   ├── layout.tsx          # Main layout
   └── page.tsx            # Form creation page
/components
   ├── /form               # Core form components
   │     ├── FormDesigner.tsx
   │     ├── FormPreview.tsx
   │     └── FormSubmissions.tsx
   ├── /layout             # Layout components
   │     ├── FormHeader.tsx
   │     ├── FormFooter.tsx
   │     └── PreviewHeader.tsx
   ├── /question           # Question-related components
   │     ├── QuestionCard.tsx
   │     ├── QuestionMenu.tsx
   │     └── QuestionTypeSelect.tsx
   ├── /shared             # Shared components
   │     ├── animated-container.tsx
   │     ├── template-menu.tsx
   │     └── reset-button.tsx
   └── /ui                 # UI-specific components
/context                   # State management
   └── FormContext.tsx
/lib                       # Utility functions and types
   ├── formTemplates.ts
   ├── questionTypes.ts
   └── types.ts
/styles                    # Global styles
   └── globals.css
```  

---

## Assumptions and Constraints  

- **Icon Selection:** Closest available icons used if mockup icons are unavailable.  
- **Validation:** Basic, all fields are required. No complex validations (e.g., email).  
- **Conditional Logic:** Not supported in this version.  
- **Save as Draft:** Placeholder functionality; no persistent storage.  
- **Publishing:** Redirects to the preview page.  

--- 
