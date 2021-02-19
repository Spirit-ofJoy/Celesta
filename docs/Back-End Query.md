# Back End -
### This is the backend deployment server 
## https://kraya-anti.herokuapp.com/

### Use Postman to see the responses [link](https://www.postman.com/downloads/)

### Login
* POST - (for Trader/Industries) https://kraya-anti.herokuapp.com/login?email=superuser@superuser.com&password=quickpass
* POST - (for Distributors) https://kraya-anti.herokuapp.com/login?email=user@user.com&password=password

### Getting Trader details after login
* GET - https://kraya-anti.herokuapp.com/profile/trader?id=superuse

### Getting Distributor's details after login
* GET - https://kraya-anti.herokuapp.com/profile/distributor?id=username

### Updating the to-do list
* POST - https://kraya-anti.herokuapp.com/todo?id=superuse&todo=["note1","note2"]

### Search using tags
* POST - https://kraya-anti.herokuapp.com/search/item?search=paper&search_in=tag

### Search using Product names
* POST - https://kraya-anti.herokuapp.com/search/item?search=Sirpur%20A1%20Rim&search_in=product

### Search PRoducts in Brands
* POST - https://kraya-anti.herokuapp.com/search/item?search=Coca%20Cola&search_in=brand
  
### This is the distributor profile update
* POST - https://kraya-anti.herokuapp.com/distributor/update/profile?id=administ&name=Padmavat%20Co.&contact=874125369&description=This%20is%20all%20Cold%20Drinks.%20Always%20have%20been

### This is the trader profile update
* POST - https://kraya-anti.herokuapp.com/trader/update/profile?id=superuse&name=DeshMukh%20Traders&contact=1488687668

### This is the Trader SignUp
* POST - https://kraya-anti.herokuapp.com/signup?email=popop@popop.com&name=Nex%20Trader&contact=741298536&password=nextpop&address=["Near Bank of Baroda","Sanjay Palace","","","Agra","Uttar Pradesh","","India"]

### Getting Trader Order details after login
* GET - https://kraya-anti.herokuapp.com/trader/orders?id=superuse
