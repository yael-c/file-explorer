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
- **Fix "Create Folder" routing bug**: Currently, the "Create Folder" button results in a 404 error. This will probably be resolved by ensuring the backend route `/api/create-folder` is properly defined and matched on both client and server and checking the configurations.
- **Move types to a separate folder**: Extract shared and frontend-specific TypeScript types into a dedicated `types/` directory for better maintainability and reusability.
- **Use enums for constants**: Introduce `enum`s for values like entry types (e.g., file/folder) to improve type safety and readability.
- **Use environment variables for config**: Externalize hardcoded URLs and configuration values into `.env` files, for client and server.
- **Improve frontend design**: Right now the design is UGLY. Enhance the UI with better styling and layout using some CSS framework, responsive design, and clear folder/file icons.

