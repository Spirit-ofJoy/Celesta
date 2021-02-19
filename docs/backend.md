# The Server ( Web Application Backend )
* This documentation will give you a step by step instruction on how to set up backend on your local machine or server.

## For connecting to your mysql database
* In a folder named **authorise** Configure **mysql-login.json** with the information asked. *The project wil start working on the mysql on your machine*
  
```json
{
    "user":"mysql user -- -- use root for testing if nothing else works",
    "password":"mysql password -- -- use root password for testing if nothing else works",
    "databaseName":"database name that you gave"
}
```
## For connecting to the map quest api
* In a folder named **authorise** Configure **api.json** with the information asked. *The project wil start using your api*
* Get Map Quest API [here](https://developer.mapquest.com/)
  
```json
{
    "mapquest":"api key"
}
```