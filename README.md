# Local File Explorer

## Setup Instructions

### Server
```
cd server
npm install
npm run build
npm start
```

### Client
```
cd frontend
npm install
npm run dev
```


## Notes

### Future Features
- **Move types to a separate folder**: Extract shared and frontend-specific TypeScript types into a dedicated `types/` directory for better maintainability and reusability.
- **Use enums for constants**: Introduce `enum`s for values like entry types (e.g., file/folder) to improve type safety and readability.
- **Use environment variables for config**: Externalize hardcoded URLs and configuration values into `.env` files, for client and server.
- **Improve frontend design**: Right now the design is UGLY. Enhance the UI with better styling and layout using some CSS framework, responsive design, and clear folder/file icons.
- **Ensure types mentions**: In order to ensure code readability and guard types.
- **Check-out for async functions** instead of the synchronous ones