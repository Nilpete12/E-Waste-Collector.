# 1. Start with a lightweight PHP server
FROM php:8.2-cli

# 2. Install required system tools and PostgreSQL database drivers
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl libpq-dev \
    && docker-php-ext-install pdo_pgsql zip

# 3. Install Node.js (Required for React/Vite)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# 4. Install Composer (PHP Package Manager)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 5. Set up the working directory
WORKDIR /app

# 6. Copy all your code into the Docker container
COPY . .

# 7. Install your specific dependencies
RUN composer install --no-dev --optimize-autoloader
RUN npm install

ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

RUN npm run build

# 8. Render automatically assigns a PORT, we need to expose it
EXPOSE $PORT

# 9. Start the Laravel Application!
CMD php artisan serve --host=0.0.0.0 --port=$PORT