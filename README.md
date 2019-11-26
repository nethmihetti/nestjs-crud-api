# Nestjs CRUD API

## Stack
* Node.js >= 8.9.0
* TypeScript
* Nest.js framework
* MySQL 5.7

## Local development environment

0. Make sure your local Node.js version is >= 8.9.0.

1. [Install](https://dev.mysql.com/doc/refman/5.7/en/installing.html) MySQL database server locally. Create a database using this query:

    `CREATE DATABASE crud_v1 CHARSET = utf8 COLLATE = utf8_general_ci;`
    
2. Adjust the `CUBED_DB_DSN` variable value with your local MySQL server credentials, the format is: `mysql://user:password@hostname:port/?db=db_name`, you may omit the `:password` part in case your DB server user can connect to a database without a password.

3. Execute the following commands at project root:

```bash
# Install NPM dependencies
$ npm install

# Run development mode with reload on file changes
$ npm run start:dev
   
# For Windows OS use "npm run start:dev:win" instead 
```
The backend API is available at [http://localhost:3000](http://localhost:3000), Swagger API docs are available at [http://localhost:3000/docs/](http://localhost:3000/docs/). 
