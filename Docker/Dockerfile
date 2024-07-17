# App Base Stage
FROM node:22.3.0-slim AS base

# Port to Expose
EXPOSE 8081

# Shell
SHELL ["/bin/bash", "-c"]

# update to npm latest version
RUN npm install -g npm@latest



# Development Stage
FROM base AS dev

# Set Working Directory
WORKDIR /var/app

# Copy to package.json and package-lock.json
COPY ./npm/package.json ./package.json
COPY ./npm/package-lock.json ./package-lock.json

# Install Dependencies
RUN npm ci

# Change owner
RUN chown -R $(whoami) ./node_modules/

# CMD
CMD ["npm", "start"]

