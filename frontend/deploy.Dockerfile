FROM node:24-alpine AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:24-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "8080"] 
