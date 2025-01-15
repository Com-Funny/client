# Install dependencies only when needed
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat tzdata
WORKDIR /project
COPY project/package.json ./
RUN yarn install --force

# Develope image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /project

# COPY --from=deps /project/node_modules ./node_modules

ENV NODE_ENV development

# You only need to copy next.config.js if you are NOT using the default configuration
COPY /project .
COPY /project/next.config.ts ./
COPY --from=deps /project/node_modules ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.

CMD ["yarn","dev"]