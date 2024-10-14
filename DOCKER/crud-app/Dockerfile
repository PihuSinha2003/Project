FROM node

WORKDIR /app

COPY . /app

# RUN npm install
ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development" ]; \
then npm install; \
else npm install --only=production; \
fi

ENV PORT 3000
EXPOSE ${PORT}

# CMD ["nodemon","server.js"]

# CMD ["npm", "start"]

CMD ["node", "server.js"]

