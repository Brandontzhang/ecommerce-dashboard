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