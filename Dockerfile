# Step 1. Install dependencies only when needed
FROM node:alpine AS builder
RUN apk update && apk add --no-cache libc6-compat && apk add git

RUN npm install -g pnpm@latest

WORKDIR /app
COPY package.json package-lock.json ./

# Use --frozen-lockfile instead of pnpm ci
RUN pnpm install

ENV NEXT_TELEMETRY_DISABLED 1

COPY /src ./src
COPY /public ./public
COPY /next.config.js .
COPY /tsconfig.json .
COPY /.env .

RUN pnpm run build

# Step 2. Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]
