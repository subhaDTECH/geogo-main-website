# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Copy the Gatsby project files to the container
COPY . .

# Set environment variables for connecting to Strapi

# Expose the default Gatsby port
EXPOSE 8000

# Define the command to start the Gatsby development server
CMD ["npm", "start"]
