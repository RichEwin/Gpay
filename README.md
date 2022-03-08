# Gpay
Gpay is an application that renders a dashboard to add or delete gigger employees.

Gpay is built with a frontend repository (React/Typescript/Webpack) and backend repository (Node.js/Express) and is connected to a mySQL database.

Throughout the build of the application, I used [pull requests](https://github.com/RichEwin/Gpay/commits/master) to manage the workflow.

## How to run

```
git clone https://github.com/RichEwin/Gpay.git
```

### Frontend Installation 
```
cd GpayFrontend

npm install

npm run serve

http://localhost:8080/
```
### Backend Installation 
```
cd GpayBackend

npm install

npm run server

http://localhost:3002/
```

### Database Installation 

Either run with your locally instead MySQL:
```
cd GpayBackend

mysql < create_table.sql
```

Or if you already have docker-compose:
```
cd GpayBackend
docker-compose up --build
```
