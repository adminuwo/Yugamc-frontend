# Build stage
FROM node:18-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage (using Nginx)
FROM nginx:stable-alpine
# Copy the build output (dist/) from build-stage to Nginx public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Google Cloud Run listens on port 80 or 8080 by default
# But it's best to specify a standard port for Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
