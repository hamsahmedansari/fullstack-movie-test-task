# Movie App

A Next.js based application with integrated features such as form handling, file uploads, and toast notifications. It uses various technologies like MongoDB, TypeScript, and Azure services.

## Installation

To get started with the project, follow these steps:

1. **Install dependencies**

```bash
npm install
```

2. **Start the development server**

```bash
npm start
```

## Live Demo

You can view the deployed application here:

[Live Demo](http://20.13.172.79:3000/)
[Live Demo](https://temp-movie-blue.vercel.app)

## Features (Things I would be doing if I had more time)

1. Use **Mongoose** for MongoDB object modeling.
2. Add **password hashing** for security.
3. Move API calls to custom hooks like `useMovie`, which will manage API requests and states.
4. Introduce a **global configuration** for centralized settings.
5. Add **End-to-End testing** using **Cypress**.

## Credentials

- **Email**: test@example.com
- **Password**: password123

## Technologies Used

- **Next.js** - Framework for React-based applications
- **Formik** - Form handling and validation
- **react-dropzone** - For handling file uploads
- **react-toastify** - For toast notifications
- **Yup** - Schema validation for form fields
- **MongoDB** - Database
- **Mongoose** (planned) - MongoDB Object Data Modeling (ODM)
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - Tool for transforming CSS
- **TypeScript** - Superset of JavaScript for type safety
- **PM2** - Process manager for Node.js applications
- **Azure Cosmos DB (MongoDB)** - NoSQL Database service on Azure
- **Azure Web Services** - Cloud platform for hosting the application

## Notes

- Currently, I am using the **API from the Frontend** to show the loading effect and load data after the page has loaded. Though it can be achieved using **SSR (Server-Side Rendering)**, I prefer this approach to show a loading state.
- This application can be easily deployed to **Vercel** or a **VM** (Virtual Machine) for hosting.

## Deployment

To deploy this application, you can use platforms such as **Vercel** or deploy it on a Virtual Machine (VM) using Azure or other services.
