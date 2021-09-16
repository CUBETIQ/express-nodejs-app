FROM cubetiq/calpine-node:latest
LABEL maintainer="sombochea@cubetiqs.com"

RUN echo "Starting setting up timezone to ${TIMEZ}..."
ENV TIMEZ=Asia/Phnom_Penh
# For Alpine
# Setup Timezone
RUN apk update && \
    apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/${TIMEZ} /etc/localtime && \
    echo ${TIMEZ} > /etc/timezone
    
WORKDIR /app
COPY . /app

RUN yarn config set registry https://r.ctdn.net
RUN yarn build

EXPOSE 3000
CMD [ "yarn" , "serve"]