FROM mcr.microsoft.com/playwright:v1.39.0-jammy

WORKDIR /app

COPY package.json .

# RUN apk add chromium

RUN npm install

COPY . .

RUN npx playwright install chromium
RUN npx playwright install firefox
RUN npx playwright install webkit

# Make the Playwright browser cache writable
# RUN chmod -R 777 /root/.cache/ms-playwright

ENV PLAYWRIGHT_BROWSERS chromium,firefox,webkit
ENV PLAYWRIGHT_HEADLESS 1
ENV PLAYWRIGHT_TEST_DIR /app/tests

CMD ["npx", "playwright", "test", "--output=report"]
