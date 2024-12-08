# Form Builder Application

## Task Overview

Create a Next.js application for a form builder that allows users to create, preview, fill out, and submit forms.

## Task Overview

### Functional Requirements

- [ ] Implement form creation UI with 6 question types (short answer, long answer, single select, number, URL, date)
- [ ] Implement questiom, card states (active, inactive, hover, error) along with 
- [ ] Implement form preview with fill-out capability and completeness percentage.
- [ ] Implement form submission with success message.
- [ ] Implement a API to save the form data
- [ ] Implement a page to view submitted forms in a table

### Non-Functional Requirements

- [ ] Use Next.js for the application
- [ ] Use TypeScript or JavaScript
- [ ] Use TailwindCSS for the UI
- [ ] Host the application and include the live link in the GitHub repository README or when submitting the assignment
- [ ] Maintain a clean commit history throughout the development process
- [ ] Ensure the app is pixel-perfect and mobile-responsive

### Bonus Points

- [ ] Add interactions or animations on UI actions
- [ ] Add functionality to re-order the form questions
- [ ] Use an API for saving the form data
- [ ] Show submitted forms in a table

### Assumptions

- [ ] Mention any assumptions made for the sake of this assignment either in the README or in the email of assignment submission

## Pages Breakdown

### 1. Form Creation Page

- **Path:** `/create`
- **Description:** This page allows users to create a new form by selecting input types and adding questions. Users can add questions of different types (short answer, long answer, single select, number, URL, date).

### 2. Form Preview Page

- **Path:** `/preview`
- **Description:** This page displays a preview of the created form. Users can fill out the form and see the completeness percentage. The form can be submitted from this page.

### 3. Form Submissions Page

- **Path:** `/submissions`
- **Description:** This page displays a table of submitted forms. Each row in the table represents a submitted form with details such as submission date and form title.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd form-builder