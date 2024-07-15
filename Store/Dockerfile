# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY ./CodeFile/package*.json ./

# Install the dependencies
RUN npm install

# Copy the app source code to the working directory
COPY ./CodeFile/app.js ./

# Expose the port that the app is running on
EXPOSE 3000

# Run the command to start the app
CMD [ "npm", "start" ]