# Use the official Node.js image as base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if applicable) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Expose the port that Vite development server will run on (default is 3000)
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
