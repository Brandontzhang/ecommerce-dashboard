### E-Commerce Project Admin Dashboard

## Next.js Lessons

1. Folder structures represent file paths
    - Layout is wrapped around the page.tsx
    - only the page.tsx componenet is actually rendered, anything that you need to be rendered for that route needs to be in there
2. Different types of folders:
    - any folders wrapped in parentheses (ex. (auth)) is used for organization and does not create a route
    - a folder wrapped in brackets is an dynamic argument (Ex. auth/[username] is available for auth/sample_username)
        - In the case above the param username is set to "sample_username"
    - a spread operator inside of brackets are catch-alls for any more arguments
        - Ex. /auth/[...users] can accept /auth/user1/user2/user, and the param username is set to ['user1', 'user2', 'user3']
    - using another brackets ([[...users]]) makes the catch-all segments optional
        - in the example above, it would make simply /auth work as well
3. Server vs Client components:
    - By default, all components within a next.js project are server components
    - To declare a client component, add "use client" at the top of the component file 
        - when a component is declared to be a client component, all components that are imported and used within the component are also made to be client components
    - A quick list of when to use server components and when to use client components
        - server:
            - Fetching data directly or from the backend
            - sensitive server information
            - large dependencies (don't want to make the client side download too much stuff such as npm packages)
        - client:
            - any sort of browser interaction
            - use state and lifecycle hooks (useState, useEffect, useReducer)
            - using browser APIs
    - in general, components should be declared client components at the lowest level. If we view all the components as a tree, we want to mostly only declare leaf components as client components
    - Another case to watch out for are context hooks, or any component following a provider pattern
        - ex. a context provider is a client component, to allow all components in the app to have access to the data in the context, we wrap the context provider around the children in the root 
        - this actually doesn't make all the children client components - client components are passed down when using imports, not with props.children
    - Another case is when parent component A is a client component, and is uses component C. Parent component B is a server component and also extends component C
        - when component A is renderedm component C is also rendered as a client component, but when component B is rendered, component C is a server component
4. Hydration Error
    - This error occurs when there is a mismatch between the component rendered on the server and the one rendered on the client
        1. You messed up some HTML syntax
            - no divs inside of p, need a tbody inside of a table, etc.
        2. Using a third party component (import) that is not up to date with new conventions
            - use a useEffect hook to check that we are on the client side before rendering the component
            - its not enough to just make it a client component, since client components are still prerendered on the server side, need to just not render it at all (reference shop modal)


## Use Form Hook
1. Schemas are defined for form validation
    - popular libraries include zod and yup (zod seems to be a bit more popular since it better supports typescript)
2. Reducers are included within the use form hook, and take in the schema defined so that it can be used to validate user inputs

## New Typescript Lingo
1. What does the keyword `declare` do? And `globalThis`?

## React Knowledge
1. When does the code run if it is not included within any hooks? Just right in the component, outside of any useEffect?

## Prisma Tips and Tricks
1. To generate the schema, use npx prisma generate
2. To push the schema to the database, use npx prisma db push
3. To reset the db, use npx prisma migrate reset (doing so will require generating and pushing the schemas again)


## Big Lesson:
- Do research into the Framework/technology learning, answering the following questions:
    - Why this?
        - More than, "I think it's intersting", "people said I should learn it", "it's industry standard"
        - More like, why is it intersting, why do people learn it, why is it industry standard?
    - What are the alternatives to it?
    - What problems does it solve?
    - What sets it apart from other tools doing a similar thing?
    - What are the basics of it?
        - the core decisions behind the design

In trying to solve a bug, I realized I didn't even know why half the things were occuring. What are server and client components? What exactly is a hydration error? Why am I jumping through all these hoops and hurdles to learn next.js when all of this would've been simpler in basic React? Well, seems like I lack a basic understanding. Not to say I need to go and read a book on the framework, but I'm going to go do some more prep work before jumping into a project like this.