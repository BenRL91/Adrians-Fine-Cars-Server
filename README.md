# Adrians Fine Cars

### Table of Contents
1. [User Model](#user-model)
  * [User Registration](#user-registration)
  * [User Login](#user-login)
  * [User Deletion](#user-delete)
2. [Vehicle Model](#vehicle-model)
  * [Vehicle Creation](#vehicle-creaton)
  * [Vehicle Index](#vehicle-index)
  * [Vehicle Show One](#vehicle-show-one)
  * [Vehicle Edit](#vehicle-edit)
  * [Vehicle Delete](#vehicle-delete)
3. [Photo Model](#photo-model)
  * [Photo Creation](#photo-creation)
  * [Photo Show For Vehicle](#photo-show-for-vehicle)
  // * [Photo Edit](#photo-edit)
  * [Photo Delete](#photo-delete)

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

  **Error Responses:**

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

  #### User Login

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

  **Error Responses**

  ####User does not exist
  ```
    {
      error: "User does not exist"
    }
  ```

  ### Password Entered was incorrect

  ```
    {
      error: "Passowrd mismatch"
    }
  ```

  #### User Delete

  #### DELETE request to user/:id

  *This route is present for the deletion of a user.*

  DELETE https://adrians-fine-cars-server.herokuapp.com/user/:id


  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  **Example Response:**

  ```
  {
    "message": "Your account has been deleted."
  }
  ```

  ## **Vehicles**

  #### Vehicle Creation

  #### POST request to /vehicles

  *This route is present for the creation of new vehicles.*

  POST https://adrians-fine-cars-server.herokuapp.com/vehicles/

  **Example Request:**

  ```
 {
    "makemodel": "2016 Chevrolet Camaro",
    "engine": "3.6L V6",
    "transmission": "Automatic",
    "mileage": "11 miles",
    "drivetrain": "Rear wheel drive",
    "interiorcolor": "Gray",
    "exteriorcolor": "Silver",
    "vin": "1G1FB1R54G0165728",
    "stock": "66B6Y0",
    "citympg": 19,
    "hwympg": 28,
    "warranty": "Basic - 3 years/36,000 miles",
    "price": "31,032",
    "sold": false
}
  ```

  **Example Response:**

  ```
{
  "makemodel": "2037 Chevrolet Camaro",
  "engine": "3.6L V6",
  "transmission": "Automatic",
  "mileage": "11 miles",
  "drivetrain": "Rear wheel drive",
  "exteriorcolor": "Silver",
  "interiorcolor": "Gray",
  "warranty": "Basic - 3 years/36,000 miles",
  "vin": "1G1FB1R54G0165728",
  "stock": "660620",
  "citympg": "19",
  "hwympg": "28",
  "price": "31,032",
  "sold": "false",
  "user_id": 5,
  "created_at": "2016-09-01 16:02:57",
  "updated_at": "2016-09-01 16:02:57",
  "id": 8
}
  ```

  #### Vehicle Index

  #### GET request to /vehicles

  *This route is present for the registration of new users.*

  POST https://adrians-fine-cars-server.herokuapp.com/users/

  **Example Request:**

  ```
  No Parameters

  ```

  **Example Response:**

  ```
[
  {
    "makemodel": "2016 Chevrolet Camaro",
    "engine": "3.6L V6",
    "transmission": "Automatic",
    "mileage": "11 miles",
    "drivetrain": "Rear wheel drive",
    "interiorcolor": "Gray",
    "exteriorcolor": "Silver",
    "vin": "1G1FB1R54G0165728",
    "stock": "660620",
    "citympg": 19,
    "hwympg": 28,
    "warranty": "Basic - 3 years/36,000 miles",
    "price": "31,032",
    "sold": "false",
    "user_id": null,
    "id": 2,
    "created_at": "2016-08-24 20:44:12",
    "updated_at": "2016-08-24 20:44:12"
  },
  {
    "makemodel": "2018 Corolla",
    "engine": "3.6L V6",
    "transmission": "Automatic",
    "mileage": "11 miles",
    "drivetrain": "Rear wheel drive",
    "interiorcolor": "Blue",
    "exteriorcolor": "Silver",
    "vin": "check check",
    "stock": "l43lk24l3",
    "citympg": 19,
    "hwympg": 28,
    "warranty": "Basic - 3 years/36,000 miles",
    "price": 20,
    "sold": "false",
    "user_id": null,
    "id": 3,
    "created_at": "2016-08-24 20:44:31",
    "updated_at": "2016-08-24 21:31:14"
  },
  {
    "makemodel": "2037 Chevrolet Camaro",
    "engine": "3.6L V6",
    "transmission": "Automatic",
    "mileage": "11 miles",
    "drivetrain": "Rear wheel drive",
    "interiorcolor": "Gray",
    "exteriorcolor": "Silver",
    "vin": "1G1FB1R54G0165728",
    "stock": "660620",
    "citympg": 19,
    "hwympg": 28,
    "warranty": "Basic - 3 years/36,000 miles",
    "price": "31,032",
    "sold": "false",
    "user_id": null,
    "id": 4,
    "created_at": "2016-08-24 20:44:35",
    "updated_at": "2016-08-24 20:44:35"
  }
]
  ```

  #### Vehicle Show One

  #### GET request to /vehicles/:id 

  *This route is present for showing a single vehicle listing.*

  GET https://adrians-fine-cars-server.herokuapp.com/vehicles/2

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  **Example Response:**

  ```
{
  "makemodel": "2016 Chevrolet Camaro",
  "engine": "3.6L V6",
  "transmission": "Automatic",
  "mileage": "11 miles",
  "drivetrain": "Rear wheel drive",
  "interiorcolor": "Gray",
  "exteriorcolor": "Silver",
  "vin": "1G1FB1R54G0165728",
  "stock": "660620",
  "citympg": 19,
  "hwympg": 28,
  "warranty": "Basic - 3 years/36,000 miles",
  "price": "31,032",
  "sold": "false",
  "user_id": null,
  "id": 2,
  "created_at": "2016-08-24 20:44:12",
  "updated_at": "2016-08-24 20:44:12"
}
  ```

  #### Vehicle Edit

  #### PUT request to /vehicles/:id

  *This route is present for the registration of new users.*

  PUT https://adrians-fine-cars-server.herokuapp.com/vehicles/2

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  ```
  {
    "makemodel": "Toyota Corolla"
  }
  ```

  **Example Response:**

  ```
{
  "makemodel": "Toyota Corolla",
  "engine": "3.6L V6",
  "transmission": "Automatic",
  "mileage": "11 miles",
  "drivetrain": "Rear wheel drive",
  "interiorcolor": "Gray",
  "exteriorcolor": "Silver",
  "vin": "1G1FB1R54G0165728",
  "stock": "660620",
  "citympg": 19,
  "hwympg": 28,
  "warranty": "Basic - 3 years/36,000 miles",
  "price": "31,032",
  "sold": "false",
  "user_id": null,
  "id": 2,
  "created_at": "2016-08-24 20:44:12",
  "updated_at": "2016-08-24 20:44:12"
}
  ```  


  #### Vehicle Delete

  #### DELETE request to /vehicles/:id

  *This route is present for the deletion of new a vehicle.*

  DELETE https://adrians-fine-cars-server.herokuapp.com/vehicles/2

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  **Example Response:**

  ```
  {
    message: "This listing has been deleted."
  }
  ```

  #### Photo Creation

  #### POST request to /photos

  *This route is present for the creation of new photos.*

  POST https://adrians-fine-cars-server.herokuapp.com/photos/

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```
  ```
  {
    photo_url: "http://robotmafia.com/wp-content/uploads/2011/04/mega_robot_rampage.jpg"
  }
  ```

  **Example Response:**

  ```
{
  "photo_url": "http://robotmafia.com/wp-content/uploads/2011/04/mega_robot_rampage.jpg",
  "vehicle_id": "2",
  "created_at": "2016-09-01 15:38:07",
  "updated_at": "2016-09-01 15:38:07",
  "id": 2
}
  ```

  #### Photo Show For Vehicle

  #### GET request to /photos/:vehicle_id

  *This route is present to show all the photos for one vehicle listing.*

  POST https://adrians-fine-cars-server.herokuapp.com/photos/2

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  **Example Response:**

  ```
[
  {
    "photo_url": "http://robotmafia.com/wp-content/uploads/2011/04/mega_robot_rampage.jpg",
    "vehicle_id": 2,
    "id": 1,
    "created_at": "2016-09-01 15:36:32",
    "updated_at": "2016-09-01 15:36:32"
  },
  {
    "photo_url": "http://robotmafia.com/wp-content/uploads/2011/04/mega_robot_rampage.jpg",
    "vehicle_id": 2,
    "id": 2,
    "created_at": "2016-09-01 15:38:07",
    "updated_at": "2016-09-01 15:38:07"
  },
  {
    "photo_url": "http://robotmafia.com/wp-content/uploads/2011/04/mega_robot_rampage.jpg",
    "vehicle_id": 2,
    "id": 3,
    "created_at": "2016-09-01 16:20:57",
    "updated_at": "2016-09-01 16:20:57"
  }
]
  ```

  #### Photo Delete

  #### DELETE request to /photos/:id

  *This route is present for the deletion of a photo.*

  DELETE https://adrians-fine-cars-server.herokuapp.com/photos/2

  **Example Request:**

  Request must be made with the header (including the "Bearer" in the value) with the user"s access_token like this:

  ```
  {
    "Authorization": "Bearer 203c7eb41a80cbb5398cc6b6db22ccc3"
  }
  ```

  **Example Response:**

  ```
  {
    "message": "This photo has been deleted."
  }
  ```   