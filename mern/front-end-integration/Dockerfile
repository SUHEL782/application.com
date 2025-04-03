# Use Node.js 20 (Required by react-router@7.1.5)
FROM node:20-alpine  

# Set working directory
WORKDIR /app                          

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --omit=dev  # Reduce image size by skipping dev dependencies

# Copy the rest of the application
COPY . .

COPY .env .env

# Expose the correct port
EXPOSE 3000

# Ensure React is accessible externally
ENV HOST=0.0.0.0

# Start the app
CMD ["npm", "start"]
