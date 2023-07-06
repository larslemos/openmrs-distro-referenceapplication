# syntax=docker/dockerfile:1.3
FROM --platform=$BUILDPLATFORM node:18-alpine AS dev

ARG APP_SHELL_VERSION=4.4.2-pre.742

RUN mkdir -p /app
WORKDIR /appb

COPY demo-build-config.json .
COPY package.json .
COPY package-lock.json .
COPY yarn.lock .

ARG CACHE_BUST

# RUN npx --legacy-peer-deps openmrs@${APP_SHELL_VERSION} assemble --manifest --mode config --config demo-build-config.json --target ./spa 

# npx --legacy-peer-deps openmrs@4.5.1-pre.779 assemble --manifest --mode config --config demo-build-config.json --target ./spa 

# npx --legacy-peer-deps openmrs@4.5.1-pre.779 build --build-config demo-build-config.json --target ./spa --page-title "Namibia Distro" --support-offline false
# RUN npx --legacy-peer-deps openmrs@${APP_SHELL_VERSION} build --build-config demo-build-config.json --target ./spa --page-title "Namibia Distro" --support-offline false

FROM nginx:1.23-alpine

RUN apk update && \
    apk upgrade && \
    # add more utils for sponge to support our startup script
    apk add --no-cache moreutils

# clear any default files installed by nginx
RUN rm -rf /usr/share/nginx/html/*

COPY startup.sh /usr/local/bin/startup.sh
RUN chmod +x /usr/local/bin/startup.sh

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=dev /app/spa /usr/share/nginx/html

CMD ["/usr/local/bin/startup.sh"]
