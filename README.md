# NextJS learning content
## Installation process
- Install npm using this command ```sudo apt-get install npm```
- To install nextJS you need to run this command ```npx create-next-app@latest```
## TO run your nextJs project
- To tun your nextJs project all you need to do is run this command ```npm run dev```
## Project's folder structure
### First we have got package.json
This is where our project's dependencies and scripts live.      
For dependencies we have got the essentials : 
```
"dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.1.7"
  },
```
The script section is also pretty straight forward
```
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```
 - dev for development mode
 - build for production builds
 - start for running the production server
 - lint for sending out nextJs built in eslint configurations       
 
**NOTE** : ESLint is an open-source tool that helps you find and fix JavaScript errors in Next.js projects. It's a static code analyzer that helps you write better code, avoid bugs, and maintain consistent coding standards

### next.config.ts
This file is for nextJs settings
### tsconfig.json
This file is for typeScript configuration settings
### eslint.config.mjs
This file is for Eslint configurations
### tailwind.config.ts and post.css.config.mjs
This file is for tailwind configurations
### node_modules folder
This folder is the home of all our installed dependencies. This gets created when you run ```npm install``` or in this case when we run ```npm run dev``` this command handles the installation automatically when we try to run the development server of nextJs.
### public folder 
This is the folder where all your static files like images and svgs go.
### src folder
This folder contains the app folder which is the app router. This is where we will spend most of our time during development of any nextJs application.

## Explaination how it all work togeather
When we run ```npm run dev``` command .
- The execution starts from package.json
- Moves to layout.tsx rendering the RootLayout component
- For the url localhost 3000 it looks for the component in page.tsx within the app folder that is our home component.
- the page.tsx component is rendered inside the root layout.tsx 

## REACT Fundamentals necessary for understanding how to write nextJs code
### React Server Components (RSC)
This architecture introduces a new approach to creating React components by dividing them into two distict types.       
- Server Components : 
    - By default nextJs treats all components as server components. These components can perform server-side tasks like reading files or fetching data directly from a database.
    - The tradeoff is they can't use React hooks or handle user interactions.
- Client Components
    - If you want to create a client component then you will need to add the "use client" directive at the top of your component file.
    - While client component can't perform server side tasks like creating files they can use react hooks and handle interactions.
    - Think of client components as traditional react components you are already familiar with.

**NOTE:** React Hooks are functions that let you use React's state and lifecycle features in function components, instead of writing class components. Hooks make it easier to manage state, reuse logic, and write code. 
### Routing in nextJS