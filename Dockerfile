# Build stage
FROM node:current-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Compile TypeScript
RUN npm run build

# Prune development dependencies
RUN npm prune --production


# Production stage
FROM node:current-alpine

WORKDIR /app

# Copy package.json and node_modules from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy the rest of the application files from the builder stage
COPY --from=builder /app/index.js ./
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 6769

# Start the application
CMD ["node", "index.js"]