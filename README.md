# webb22-alm-cicd

## Project Description

This project is a web application developed using Express.js for handling HTTP requests and responses. It implements various features such as routing, and unit testing. The project follows a CI/CD approach with automated testing and code quality checks.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository: 

```bash
git clone https://github.com/MikaMunterud/webb22_alm_cicd
```

2. Navigate to the project directory:
   
```bash
cd webb22-alm-cicd
```

3. Install the dependencies:

```bash
npm install
```

4. Run the application

```bash
npm start
```

## Running the Application with docker
1. Go to <https://github.com/MikaMunterud/webb22_alm_cicd/pkgs/container/webb22_alm_cicd> to find the latest docker image.
2. Run the command shown in your terminal, for example

```bash
docker pull ghcr.io/mikamunterud/webb22_alm_cicd:sha-16c7fa8
````

3. Run the created docker image (based on the above docker image name)

```bash
docker run -d -P ghcr.io/mikamunterud/webb22_alm_cicd:sha-16c7fa8
```

4. Find which port the image is running on and open it in your local web browser

```bash
docker container ls
```

This will launch the server, and you can access the application in your browser at <http://localhost:3000/>, where 3000 is the specified port number.

## Running Tests

The project includes unit tests and integration tests. To run the unit tests, use the following command:

```bash
npm test
```
