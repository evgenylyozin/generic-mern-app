FROM node:16.13.1-alpine
COPY . /app/
# Setup base app dependencies
WORKDIR /app
RUN /bin/sh -c 'npm install'
EXPOSE 5000
# Run the backend part of the app
CMD /bin/sh -c 'npm run start'