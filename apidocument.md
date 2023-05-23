## Get all users
(GET)http://localhost:4002/api/auth/users



# #Register
(POST)http://localhost:4002/api/auth/register
{
    "name": "Patra",
    "email": "patra@gmail.com",
    "password": "123456",
    "number": 9867555463,
    "role": "user"
}

## login
(POST)http://localhost:4002/api/auth/login
(Body) => {"email": "rajesh@gmail.com","password": "998800"}
(response) => { "auth": true, "token": "eyJhbGciOi"}

## UserInfo
(GET)http://localhost:4002/api/auth/userInfo
 