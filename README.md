# Backend Technologies Learning Guide

## Overview

This project (Aborean Finance/Uniswap Interface) uses a **serverless backend architecture** with multiple API integrations. As a frontend developer, here's what you need to learn to become a full-stack developer on this project.

---

## Core Backend Technologies

### 1. **Cloudflare Workers & Pages Functions** ⭐ PRIMARY BACKEND

**What it is:** Serverless edge computing platform that runs your backend code close to users globally.

**Used for:**
- Server-side rendering (SSR) for meta tags (Open Graph tags for social sharing)
- Dynamic image generation for link previews
- Edge caching and optimization
- Handling API routes

**Location in project:** `/functions` directory

**Key concepts to learn:**
- Cloudflare Workers runtime (V8 isolates, not Node.js)
- HTMLRewriter API for HTML manipulation
- Cache API for performance optimization
- Edge computing concepts
- Request/Response handling at the edge

**Resources:**
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [HTMLRewriter API](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/)

**Commands:**
```bash
yarn start:cloud          # Run local Cloudflare development server
yarn test:cloud           # Test cloud functions
yarn typecheck:cloud      # Type check cloud functions
```

---

### 2. **GraphQL** ⭐ API QUERY LANGUAGE

**What it is:** Query language for APIs that allows clients to request exactly the data they need.

**Used for:**
- Fetching blockchain data from Uniswap's GraphQL API
- Token information, pool data, trading data
- Efficient data fetching with precise queries

**Location in project:** 
- `packages/uniswap/src/data/graphql/`
- GraphQL schema: `packages/uniswap/src/data/graphql/uniswap-data-api/schema.graphql`

**Key concepts to learn:**
- GraphQL queries, mutations, subscriptions
- Schema definition language (SDL)
- Apollo Client (used in this project)
- Code generation with GraphQL Codegen
- Query optimization and caching

**Resources:**
- [GraphQL Official Docs](https://graphql.org/learn/)
- [Apollo Client Docs](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)

**Commands:**
```bash
yarn graphql:schema       # Fetch GraphQL schema from API
yarn graphql:generate     # Generate TypeScript types from schema
```

---

### 3. **REST APIs** ⭐ TRADITIONAL HTTP APIS

**What it is:** Standard HTTP-based APIs using GET, POST, PUT, DELETE methods.

**Used for:**
- Leaderboard API integration (`https://api.portal.abs.xyz/api/v1`)
- Trading API (`https://api.uniswap.org/v2/trade`)
- Profile data fetching
- External service integrations

**Location in project:**
- `src/pages/Leaderboard/api/`
- `packages/uniswap/src/data/tradingApi/`

**Key concepts to learn:**
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes (200, 404, 500, etc.)
- Request/response headers
- Error handling and retry logic
- Rate limiting and pagination
- Authentication (API keys, tokens)

**Resources:**
- [REST API Tutorial](https://restfulapi.net/)
- [MDN HTTP Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP)

**Commands:**
```bash
yarn tradingapi:schema    # Fetch Trading API schema
yarn tradingapi:generate  # Generate TypeScript client from OpenAPI spec
```

---

### 4. **Blockchain Interaction (Ethereum/EVM)** ⭐ WEB3 BACKEND

**What it is:** Interacting with Ethereum blockchain and smart contracts.

**Used for:**
- Reading blockchain state
- Executing transactions
- Interacting with Uniswap smart contracts
- Wallet connections

**Key libraries:**
- **ethers.js** (v5.7.2) - Ethereum library for blockchain interaction
- **viem** (v2.36.1) - Modern TypeScript Ethereum library
- **wagmi** (v2.16.9) - React hooks for Ethereum
- **@web3-react/core** - Web3 connection management

**Key concepts to learn:**
- Ethereum basics (accounts, transactions, gas)
- Smart contracts and ABIs (Application Binary Interface)
- JSON-RPC providers (Infura, QuickNode, Alchemy)
- Wallet connections (MetaMask, WalletConnect)
- Contract interaction (read/write operations)
- Transaction signing and broadcasting
- Event listening and logs

**Resources:**
- [Ethereum.org Docs](https://ethereum.org/en/developers/docs/)
- [ethers.js Docs](https://docs.ethers.org/v5/)
- [viem Docs](https://viem.sh/)
- [wagmi Docs](https://wagmi.sh/)

**Commands:**
```bash
yarn anvil:mainnet        # Fork Ethereum mainnet locally
yarn anvil:base           # Fork Base network locally
```

---

### 5. **Hardhat** ⭐ SMART CONTRACT DEVELOPMENT

**What it is:** Ethereum development environment for compiling, testing, and deploying smart contracts.

**Used for:**
- Local blockchain forking for testing
- Smart contract testing
- Network simulation

**Location in project:** `hardhat.config.js`

**Key concepts to learn:**
- Solidity basics (smart contract language)
- Contract compilation and deployment
- Local blockchain forking
- Testing smart contracts
- Network configuration

**Resources:**
- [Hardhat Docs](https://hardhat.org/docs)
- [Solidity Docs](https://docs.soliditylang.org/)

---

### 6. **Firebase** (Limited Usage)

**What it is:** Google's backend-as-a-service platform.

**Used for:**
- Firestore database (rules and indexes configured)
- Remote config
- Analytics (disabled by default)

**Location in project:** `firebase.json`, `firestore.rules`, `firestore.indexes.json`

**Key concepts to learn:**
- Firestore NoSQL database
- Security rules
- Real-time data synchronization
- Firebase authentication (if used)

**Resources:**
- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Docs](https://firebase.google.com/docs/firestore)

---

## Backend Architecture Patterns

### 1. **Serverless Architecture**
- No traditional backend servers
- Functions run on-demand at the edge
- Auto-scaling and pay-per-use
- Stateless execution

### 2. **Edge Computing**
- Code runs close to users geographically
- Reduced latency
- Cloudflare's global network

### 3. **API Integration Patterns**
- REST API clients with error handling
- GraphQL queries with Apollo Client
- Batch requests and pagination
- Caching strategies

### 4. **Monorepo Structure**
- Shared packages across frontend/backend
- Turborepo for build orchestration
- Yarn workspaces for dependency management

---

## Essential Backend Skills

### 1. **TypeScript** (Already know from frontend)
- Type-safe backend code
- Interfaces for API responses
- Generics for reusable code

### 2. **Node.js Runtime**
- Understanding event loop
- Async/await patterns
- Module system (ESM/CommonJS)
- Environment variables

### 3. **API Design**
- RESTful principles
- GraphQL schema design
- Error handling patterns
- Versioning strategies
- Rate limiting

### 4. **Caching**
- Cache-Control headers
- Cloudflare Cache API
- In-memory caching
- Cache invalidation strategies

### 5. **Security**
- API key management
- CORS configuration
- Input validation
- Rate limiting
- Content Security Policy (CSP)

### 6. **Testing**
- Unit tests with Jest
- Integration tests
- Mocking external APIs
- Testing serverless functions

---

## Development Tools & Services

### Required Services (Need API Keys)

1. **QuickNode** - Ethereum node provider
2. **Infura** - Ethereum API access
3. **Alchemy** - Blockchain infrastructure
4. **Datadog** - Monitoring and logging
5. **Amplitude** - Analytics
6. **WalletConnect** - Wallet connection protocol
7. **Statsig** - Feature flags and A/B testing

### Development Tools

1. **Wrangler** - Cloudflare CLI tool
2. **Foundry/Anvil** - Ethereum development toolkit
3. **Turbo** - Monorepo build system
4. **Jest** - Testing framework
5. **GraphQL Codegen** - Type generation

---

## Learning Path (Recommended Order)

### Phase 1: Fundamentals (2-3 weeks)
1. ✅ Node.js basics and async programming
2. ✅ REST API concepts and HTTP protocol
3. ✅ Environment variables and configuration
4. ✅ Error handling patterns

### Phase 2: Serverless & Edge (2-3 weeks)
1. ✅ Cloudflare Workers fundamentals
2. ✅ Edge computing concepts
3. ✅ Serverless architecture patterns
4. ✅ Caching strategies

### Phase 3: GraphQL (2 weeks)
1. ✅ GraphQL query language
2. ✅ Apollo Client usage
3. ✅ Schema design
4. ✅ Code generation

### Phase 4: Blockchain (3-4 weeks)
1. ✅ Ethereum basics
2. ✅ ethers.js/viem libraries
3. ✅ Smart contract interaction
4. ✅ Wallet connections
5. ✅ Transaction handling

### Phase 5: Advanced (Ongoing)
1. ✅ Smart contract development with Solidity
2. ✅ Advanced caching strategies
3. ✅ Performance optimization
4. ✅ Security best practices
5. ✅ Monitoring and observability

---

## Hands-On Practice

### Start Here:

1. **Explore the Leaderboard API**
   ```bash
   # Check the implementation
   cat src/pages/Leaderboard/api/leaderboardApi.ts
   cat src/pages/Leaderboard/api/profileApi.ts
   ```

2. **Run Cloudflare Functions Locally**
   ```bash
   yarn start:cloud
   # Visit http://localhost:3000
   ```

3. **Test Cloud Functions**
   ```bash
   yarn test:cloud
   ```

4. **Fork Ethereum Mainnet Locally**
   ```bash
   yarn anvil:mainnet
   # Interact with a local copy of Ethereum
   ```

5. **Generate GraphQL Types**
   ```bash
   yarn graphql:schema
   yarn graphql:generate
   ```

---

## Key Files to Study

### Backend Logic
- `functions/[[index]].ts` - Main Cloudflare function entry point
- `functions/README.md` - Cloud functions documentation
- `src/pages/Leaderboard/api/` - REST API integration examples

### Configuration
- `hardhat.config.js` - Ethereum development config
- `firebase.json` - Firebase configuration
- `.env.defaults` - Environment variables template
- `wrangler.toml` - Cloudflare Workers config (if exists)

### Package Configuration
- `packages/uniswap/package.json` - Backend package dependencies
- `functions/tsconfig.json` - TypeScript config for functions

---

## Common Backend Tasks in This Project

1. **Adding a new API endpoint** → Modify `functions/[[index]].ts`
2. **Fetching blockchain data** → Use ethers.js or viem
3. **Querying GraphQL** → Use Apollo Client with generated types
4. **Integrating external API** → Create API client in `src/*/api/`
5. **Caching responses** → Use Cloudflare Cache API
6. **Testing functions** → Write Jest tests in `functions/`

---

## Resources & Documentation

### Official Docs
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [GraphQL](https://graphql.org/learn/)
- [Ethereum](https://ethereum.org/en/developers/)
- [ethers.js](https://docs.ethers.org/v5/)
- [Hardhat](https://hardhat.org/)

### Courses (Recommended)
- [Cloudflare Workers Course](https://developers.cloudflare.com/workers/tutorials/)
- [GraphQL Course](https://www.howtographql.com/)
- [Ethereum Development](https://cryptozombies.io/)
- [Node.js Backend](https://nodejs.dev/learn)

### Community
- Cloudflare Discord
- Ethereum Stack Exchange
- GraphQL Discord

---

## Next Steps

1. ✅ Read through `functions/README.md`
2. ✅ Run `yarn start:cloud` and explore the functions
3. ✅ Study the Leaderboard API implementation
4. ✅ Fork mainnet with Anvil and interact with contracts
5. ✅ Build a simple Cloudflare Worker function
6. ✅ Create a GraphQL query and generate types
7. ✅ Deploy a test function to Cloudflare

---

## Questions to Explore

- How does server-side rendering work with Cloudflare?
- How are meta tags injected dynamically?
- How does the app interact with Ethereum smart contracts?
- How is caching implemented for API responses?
- How are environment variables managed across environments?

---

**Good luck on your backend learning journey! 🚀**

Start with Cloudflare Workers and REST APIs, then gradually move into GraphQL and blockchain development. The serverless architecture makes it easier to get started compared to traditional backend development.
