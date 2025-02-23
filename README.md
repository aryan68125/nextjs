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
- NextKs has a file-system based routing system
- URls you can access in your browser are determined by how organized your files and folders are in your code.
- So does every folder in nextJs is converted into a url route in nextJs? The answer is no. 
- NextJs is built around conventions and routing is one area where these conventions are particularly important
    - There are three main conventions to remember.
        - All routes must live inside the app folder
        - Route files must be named either page.js or page.tsx
        - Each folder represents a segment of the url path
    - When these conventions are follwed the file automatically becomes available as a route. 
- NextJs will automatically serve a 404 not found response page when someone tries to access the url that you have not created in the app you don't have to do anything in this case since nextJs has got you covered.
- The beauty of this system is that you don't need to mess around with installing and configuring a router in your code your file and folder structure does all the heavy lifting.
- This is a perfect example of nextJs's philosophy of favouring conventions over configuration when it comes to routing.
    
**Lets implement the senario 1 : Where user hits the url ```localhost:3000```** :       
![alt text](README_images/routing/Screenshot_20250223_140334.png)
- As you can see the output here is an html tag which comes from ```src/app/page.tsx```
- With this we have completed the senario 1
- The code related to this is present inside this directory ```routing-demo/src/app/page.tsx```

**What is layout.tsx file** :       
- Even though I have deleted this file when I have deleted the app folder from src directory. The nextJS will automatically create and set it up we first access the root route.
- This file get created automatically behind the scene

**Lets implement senario 2 : In this we need to create two additional route 1 for the about page ```localhost:3000/about``` and 1 for the profile page ```localhost:3000/profile``` page**
- route : ```http://192.168.1.51:3000/profile```
    ![alt text](README_images/routing/profile_route.png)
- route : ```http://192.168.1.51:3000/about```
    ![alt text](README_images/routing/root_route.png)
**NOTE: What is export default**        
- export default is used to export the profile function as the default export of this file.
- This allows you to import the profile function elsewhere in your application without needing to use curly braces. For example: 
```import Profile from './profile'; // Now 'Profile' can be used like a regular React component
```

**Lets implement senario 3 : In this we need to create three additional routes 1 for ```localhost:3000/blog``` 1 for ```localhost:3000/blog/first``` and 1 for ```localhost:3000/blog/second```**
- In this senario we trying to tackel nested routing 
- All you need to do is create a blog folder inside the app directiory and then create a page.tsx file 
    - write this code in that page.tsx file 
    - ```
            export default function blog(){
            return <h1>this is the blog home page</h1>
        }
        ```
- Then inside the blog folder you need to create two additional folder named first and second. Then add page.tsx inside each first and second folder and add the same code inside each of them with slight variations as shown below:
    - for ```app/blog/first/page.tsx```
        - ```
              export default function blog(){
            return <h1>this is the first blog page</h1>
            }
          ```
    - for ```app/blog/second/page.tsx```
        - ```
              export default function blog(){
            return <h1>this is the second blog page</h1>
            }
          ```
### Dynamic routing in NextJS
**Lets implement senario 4 : when a user hits the url ```localhost:3000/products``` he should see products listing and when a user hots the url ```localhost:3000/products/id``` he should see the product's detials**      
- ```routing-demo/src/app/product/[productid]/page.tsx``` when implementing dynamic routing the folder with square-brackets ```[]``` will serve as the dynamic route variable that will be passed in the url
- This variable can be get in the page.tsx file present inside this ```[productid]``` folder like this 
    - ```
        export default function product_details({ params }: { params: { productid: BigInteger } }){
            return (
                <>
                <h1>Details about product {params.productid}</h1>
                </>
            )
        }
      ```
    - In real app you will have to fetch the product details using this productid from a back-end server In my case I am planning to use fast-api or django