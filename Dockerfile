## Dependencies
FROM node:20-alpine as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /home/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci

## Builder
FROM node:20-alpine as builder
WORKDIR /home/app
COPY --from=dependencies /home/app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build

## Runner
FROM node:20-alpine AS runner
WORKDIR /home/app
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
COPY --from=builder /home/app/.next/standalone ./standalone
COPY --from=builder /home/app/public /home/app/standalone/public
COPY --from=builder /home/app/.next/static /home/app/standalone/.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "./standalone/server.js"]