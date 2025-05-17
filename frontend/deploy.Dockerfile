FROM node AS build

WORKDIR /app
COPY . .

ARG VITE_APP_URL
ENV VITE_APP_URL=${VITE_APP_URL}

RUN npm install
RUN npm run build

FROM node

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "8080"] 
