## Running the Project with Docker

### Development Environment

1. Make sure you have Docker installed on your system.

2. In the project root directory, run the following command to start the development server using Docker Compose:

docker-compose up

3. Access your app in your web browser at: `http://localhost:3000`.

4. To stop the development server, press `Ctrl + C` in the terminal.

### Production Environment

1. Build the Docker image by running the following command in the project root directory:

docker build -t vitrin-with-react .

2. Run a Docker container using the built image:

docker run -p 80:80 vitrin-with-react

3. Access your production app in your web browser at: `http://localhost`.

4. To stop the container, use the following command:

docker stop <container_id>
