# Use Node.js as the base image
FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the app's source code to the container
COPY . .

# Build the Next app
RUN npm run build

EXPOSE 8080

# Serve the production build
CMD ["npm", "run", "start"]