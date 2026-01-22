# 1. Use lightweight Node image
FROM node:20-alpine

# 2. Create app directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install --only=production

# 5. Copy application code
COPY . .

# 6. Expose app port
EXPOSE 3000

# 7. Health check for container
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# 8. Start app
CMD ["node", "index.js"]
