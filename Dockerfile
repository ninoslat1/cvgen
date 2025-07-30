FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
# Salin folder dist hasil build
COPY --from=build /app/dist /app/dist

# Salin node_modules hasil prune (hanya prod)
COPY --from=build /app/node_modules /app/node_modules

# (Opsional) Salin package.json jika perlu (untuk metadata runtime)
# COPY --from=build /app/package.json /app/package.json

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD [ "dist/server/entry.mjs" ]
