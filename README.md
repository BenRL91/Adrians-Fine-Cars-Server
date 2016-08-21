# Adrians Fine Cars

### Table of Contents
1. [User Model](#user-model)
  * [Users Registration](#users-registration)
  * [Users Login](#users-login)

  ## **Users**

  #### User Registration

  #### POST request to /users

  *This route is present for the registration of new users.*

  POST https://adrians-fine-cars-server.herokuapp.com/users/

  **Example Request:**

  ```
  {
    "firstname": "John"
    "lastname": "Doe",
    "email": "jdoe@gmail.com",
    "password": "secretWord",
    "username": "johnUser"
  }
  ```

  **Example Response:**

  ```
  {
    firstname: "John",
    lastname: "Doe",
    email: "jdoe@gmail.com",
    username: "johnUser",
    created_at: "date created will be returned here",
    updated_at: "date updated will be returned here",
    access_token: "<hashed access token string will be returned here>"
  }
  ```

  **Error Responses**

  ### Email Already exists ###
  ```
    {
      error: "This Email already exists"
    }
  ```

  ### Username Already exists ###
  ```
    {
      error: "This Username already exists"
    }
  ```  

  #### Users Login

  #### POST request to /login

  *This route is present for loggin in users.*

  POST https://adrians-fine-cars-server.herokuapp.com/login/

  **Example Request:**

  ```
  {
    "email: "jdoe@gmail.com",
    "password": "secretWord"
  }
  ```

  **Example Response:**

  ```
  {
    firstname: "John",
    lastname: "Doe",
    email: "jdoe@gmail.com",
    username: "johnUser",
    created_at: "date created will be returned here",
    updated_at: "date updated will be returned here",
    access_token: "<hashed access token string will be returned here>"
  }
  ```

  ```
**Error Responses**

### User does not exist ###
```
  {
    error: "User does not exist"
  }
```

### Password Entered was incorrect ###

```
  {
    error: "Passowrd mismatch"
  }
```

#### Delete User

#### DELETE request to user/:id

*This route is present for the deletion of a user.*

DELETE https://adrians-fine-cars-server.herokuapp.com/user/:id


**Example Request:**

Request must be made with the header (including the "Bearer" in the value) with the user's access_token like this:

```
{
  "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
}
```

**Example Reponse:**

```
{
  "message": "Your account has been deleted."
}
```
