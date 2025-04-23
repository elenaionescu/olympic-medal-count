This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Olympic Medal Count App

This application displays the medal standings for countries during the Olympic games. It shows up to 10 countries that have won the most medals of a given kind, with various sorting options.


### Features

- Display medal counts for countries sorted by gold, silver, bronze, or total medals
- Support for URL parameters to control initial sorting (sort=gold|silver|bronze|total)
  
    -- When ranking by total medals, ties are broken by most gold
  
    -- When ranking by gold, ties are broken by most silver
  
    -- When ranking by silver, ties are broken by most gold
  
    -- When ranking by bronze, ties are broken by most gold

- Country flags displayed using sprites from a single image
- Responsive design
- Error handling for API failures
- Loading state while data is being fetched

Tech Stack

Framework: Next.js
Language: TypeScript
Styling: CSS-in-JS with styled-jsx (built into Next.js)

### Project Structure
```bash
/src
/components        # React components
/hooks             # Custom React hooks
/pages             # Next.js pages and API routes
/styles            # Global styles
/types             # TypeScript type definitions
/utils             # Utility functions and constants
```

### Getting Started
#### Prerequisites

Node.js 14+ and npm/yarn

Installation

1. Clone the repository
```bash
git clone https://github.com/elenaionescu/olympic-medal-count.git
cd olympic-medal-count
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 in your browser

### Using URL Parameters
You can control the initial sorting of medals by adding a sort parameter to the URL:

- http://localhost:3000/?sort=gold - Sort by gold medals (default)
- http://localhost:3000/?sort=silver - Sort by silver medals
- http://localhost:3000/?sort=bronze - Sort by bronze medals
- http://localhost:3000/?sort=total - Sort by total medals

### Building for Production
```bash
npm run build
# or
yarn build
```
Then, you can start the production server:
```bash
npm start
# or
yarn start
```

### Possible Improvements

- Add more unit and integration tests
- Implement server-side rendering for better SEO
- Add internationalization support
- Add data caching for better performance
- Implement more sophisticated error handling
- Add analytics tracking
- Improve accessibility
- Add dark mode support
