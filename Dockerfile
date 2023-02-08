# Base stage
# ---------------------------------------
FROM node:17-alpine AS base

# This get shared across later stages
WORKDIR /node/app
RUN chown -R node:node /node
USER node

# Development stage
# ---------------------------------------
FROM base AS development

ARG SERVER_PORT=${SERVER_PORT}
ENV SERVER_PORT=${NODE_ENV}
ENV NODE_ENV=${NODE_ENV}
ENV PATH /app/node_modules/.bin:$PATH
# EXPOSE $SERVER_PORT 

COPY --chown=node:node package*.json ./

RUN \
    NODE_ENV=development && \
    yarn install --frozen-lockfile

WORKDIR /node/app

CMD [ "yarn", "dev"]

# Source stage
# ---------------------------------------
# FROM base AS source

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /node
# COPY --chown=node:node package*.json ./

# RUN npm ci && npm cache clean --force

# WORKDIR /node/app
# RUN chown node:node /node/app
# COPY --chown=node:node . .

# Test stage
# ---------------------------------------
# FROM source AS test

# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# ENV PATH /node/node_modules/.bin:$PATH

# COPY --chown=node:node --from=development /node/node_modules /node/node_modules

# RUN npm run test && npm run lint

# # Production stage
# # ---------------------------------------
# FROM source AS production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# ENV PATH /node/node_modules/.bin:$PATH
# ENV SERVER_PORT=3000

# EXPOSE $SERVER_PORT

# CMD [ "node", "./bin/www" ]