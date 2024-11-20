# 🔐 Next.js Authentication Starter

## Overview

This project is a comprehensive authentication solution using the latest technologies:

- Next.js 15
- Auth.js v5 (NextAuth)
- Prisma ORM
- MongoDB
- OAuth (GitHub and Google)
- Credential-based authentication

## 🚀 Features

### Authentication Methods

- 🌐 OAuth Providers
  - GitHub
  - Google
- 📧 Credentials (Email/Password)

### Security Features

- 🔒 Password hashing with bcrypt
- 🛡️ JWT-based session management
- 🚫 Role-based access control
- 📝 Form validation
- 🔐 Middleware-based route protection

## 📦 Prerequisites

- Node.js (18+ recommended)
- MongoDB
- GitHub OAuth App
- Google OAuth Credentials

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/alphajoop/authjs-next15-prisma.git
cd authjs-next15-prisma
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables
   Create a `.env` file with the following:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/your_database_name"

# NextAuth Configuration
AUTH_SECRET=your_nextauth_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

4. Set up Prisma

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server

```bash
pnpm run dev
```

## 🔑 OAuth Setup

### GitHub

1. Go to GitHub Developer Settings
2. Create a new OAuth App
3. Set homepage URL and callback URL
4. Get Client ID and Client Secret

### Google

1. Go to Google Cloud Console
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 Client ID
5. Set authorized redirect URIs

## 🔐 Authentication Flow

1. User selects authentication method
2. Validates credentials/OAuth
3. Creates/finds user in database
4. Generates JWT token
5. Creates user session
6. Redirects to protected or home page

## 🛡️ Middleware Protection

Protected routes are secured using middleware:

- Check user authentication
- Verify user roles
- Redirect unauthorized access

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write clear, concise commit messages
- Add tests for new features
- Update documentation

## 🔜 Planned Features

- [ ] Add two-factor authentication
- [ ] Social media login expansion
- [ ] Comprehensive error handling
- [ ] Advanced role management
- [ ] Audit logging

## 📄 License

Distributed under the GNU License. See `LICENSE` for more information.

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Auth.js](https://authjs.dev/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

---

**Happy Coding! 🚀**
