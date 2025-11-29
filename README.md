<div align="center">
  <img src="./assets/recomend_icon.svg" alt="Recomend logo" width="100" />
  <h1 align="center">Recomend API Client (JS)</h1>
</div>

A fully type-safe JavaScript/TypeScript client for the [Recomend API](https://github.com/recomendapp/api). This client is generated from the official OpenAPI specification, ensuring it is always in sync with the API. It's designed for both Node.js and browser environments, making it perfect for your Next.js and Expo applications.

## ✨ Features

- **✅ Fully Type-Safe**: Enjoy autocompletion and compile-time checks, reducing bugs and improving developer experience.
- **🔄 Always Up-to-Date**: Generated directly from the backend's OpenAPI specification.
- **📞 Version Management**: Switch between different API versions (`v1`, `v2`, etc.) with full type safety.
- ** isomorphic**: Works seamlessly in both Node.js and browser environments.
- **🪶 Lightweight**: Minimal footprint with a clean and intuitive interface.

## 📦 Installation

This package is hosted on [GitHub Packages](https://github.com/features/packages). To install it, you need to configure your package manager to authenticate with GitHub.

1.  **Authenticate with GitHub Packages**:
    Create a `.npmrc` file in the root of your project with the following content:

    ```
    @recomendapp:registry=https://npm.pkg.github.com/
    ```

    You also need to authenticate. The easiest way is to set the `NODE_AUTH_TOKEN` environment variable to a [personal access token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with the `read:packages` scope.

2.  **Install the package**:
    Using your preferred package manager:

    ```bash
    # pnpm
    pnpm install @recomendapp/api-js

    # npm
    npm install @recomendapp/api-js

    # yarn
    yarn add @recomendapp/api-js
    ```

## 🚀 Usage

Here’s how to get started with the client.

### Initialization

First, create an instance of the client. You can configure the API version, base URL, authentication token, and language.

```typescript
import { createClient } from '@recomendapp/api-js';

const client = createClient({
	baseUrl: 'https://api.recomendapp.com', // Optional
	token: 'YOUR_ACCESS_TOKEN', // Optional
	language: 'en-US', // Optional default is 'en-US'
	version: 'v1', // Optional, defaults to 'v1'
});
```

### Searching for Content

Once the client is initialized, you can use the search methods.

```typescript
async function findMovies() {
  try {
    const movies = await client.search.movies({
		query: {
			q: 'Inception',
		}
	 });
    console.log('Found movies:', movies);
  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

findMovies();
```

### Dynamic Configuration

You can change the authentication token and language at any time.

```typescript
// Update the token
client.setToken('NEW_SUPER_SECRET_TOKEN');

// Update the language
client.setLanguage('fr-FR');
```

### Full API Documentation

For a complete and interactive API documentation, you can run the [Recomend API](https://github.com/recomendapp/api) service locally and visit the Swagger UI at `http://localhost:3000/api-docs` or go to the [official Recomend API endpoint](https://api.recomend.app/api-docs).
