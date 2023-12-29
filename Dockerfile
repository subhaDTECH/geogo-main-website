# # Use an official Node.js runtime as the base image
# FROM node:latest

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package.json .
# COPY package-lock.json .

# # Install project dependencies
# RUN npm install

# # Copy the Gatsby project files to the container
# COPY . .

# # Set environment variables for connecting to Strapi

# # Expose the default Gatsby port
# EXPOSE 3000

# # Define the command to start the Gatsby development server
# CMD ["gatsby", "develop", "-H", "0.0.0.0"]



# Use Ubuntu as the base image
FROM ubuntu:latest

# Update and install necessary packages


RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x  | bash - && \
    apt-get install -y nodejs

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Gatsby project to the container
COPY . .

# Build the Gatsby app

EXPOSE 8000
# Set the command to start the app when the container starts
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "8000"]
