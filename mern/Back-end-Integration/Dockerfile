# Use the latest LTS version of Node.js
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev  # Skips devDependencies to reduce image size

# Copy the rest of the application code
COPY . .

# Expose the port your backend app runs on
EXPOSE 5000 

COPY .env .env
# Set environment variables (optional)
ENV NODE_ENV=production

# Start the backend application
CMD ["node", "app.js"]
