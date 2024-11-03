FROM node:20.15.1-alpine3.20

ARG USER_ID=1001
ARG BUILD_DIR=/build
ARG APP_DIR=/app

LABEL maintainer="CloudAtScale" \
      description="Docker image for running the CloudAtScale CLI"

# Install required packages
RUN apk add --no-cache bash curl jq git openssh python3 py3-pip


# Create build directory
WORKDIR ${BUILD_DIR}

# Copy package.json and requirements.txt
COPY package.json requirements.txt ${BUILD_DIR}/

# Install node dependencies
RUN npm install

# Install python dependencies
RUN python3 -m venv ${BUILD_DIR}/venv && \
      source ${BUILD_DIR}/venv/bin/activate && \
      pip install -r requirements.txt

# Use the app directory as the working directory
WORKDIR ${APP_DIR}

# Create non-root user
RUN addgroup -g ${USER_ID} cloudatscale-user && \
      adduser -D -u ${USER_ID} -G cloudatscale-user cloudatscale-user && \
      chown -R cloudatscale-user:cloudatscale-user ${APP_DIR} && \
      chown -R cloudatscale-user:cloudatscale-user ${BUILD_DIR}

# Switch to non-root user
USER cloudatscale-user 

# Convert nodes module as executable
ENV PATH ${BUILD_DIR}/node_modules/.bin/:$PATH
ENV PATH ${BUILD_DIR}/venv/bin/:$PATH


# ENTRYPOINT [  ]
# Set the entrypoint
CMD ["bash"]
