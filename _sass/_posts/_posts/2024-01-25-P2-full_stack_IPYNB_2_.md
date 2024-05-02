---
layout: base
title: P2 | Python/Flask | Full Stack
type: collab
courses: {'csp': {'week': 20}}
---

# JS/Python/Flask Full Stack and User profile

Under UserAPI there are nested classes Security and CRUD.

## CRUD operations


CRUD is an acronym related to the basic operations done on data within a database

- Create: POST requests

- Creates new user with input data

- Performs error checking

- Sets up user object -> adds to user database

- Read: GET requests

- Handles user retrieval requests

- Data -> JSON + response

- Update: PUT/PATCH requests

- Updates based on user input

- Commits changes to user database

- This is done with the PUT request

- Delete: DELETE requests

- Handles user delete requests

- Deletes user from database

![Http Requests](https://files.catbox.moe/622dp8.jpg)

## Security

- Validates data through HTTP POST requests

- Find user id and checks validity of entered password with that stored

- JSON response with authentication status, ex. Login if valid, and no login in invalid

- Not necessarily authorization - authentication allows login while authorization allows access to a certain resource

![Security](https://files.catbox.moe/2v4yo6.jpg)

## Uses of HTTP requests in our code

- Create request used for the addition of new users

- Post-request displays are user data table

- Put request implemented to update user information

- Delete request removes specified users

## Create User:
### Frontend Code
```
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
    const url = uri + '/api/users/authenticate';
    const body = {
            // name: document.getElementById("name").value,
            uid: "toby",
            password: "123toby"
            // dob: document.getElementById("dob").value
        };
    const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };
    fetch(url, authOptions)
    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/';

        // Set the body of the request to include login data from the DOM
        const body = {
            name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/data/database";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
```
- The code above is used to create users from a form where the user creates their account
- Fetch API is used to send POST requests to the desired url address and create a new account
- This corresponds to the "C" in CRUD

### Backend Code
```
@token_required
        def post(self, current_user): # Create method
            ''' Read data for json body '''
            body = request.get_json()
            
            ''' Avoid garbage in, error checking '''
            # validate name
            name = body.get('name')
            if name is None or len(name) < 2:
                return {'message': f'Name is missing, or is less than 2 characters'}, 400
            # validate uid
            uid = body.get('uid')
            if uid is None or len(uid) < 2:
                return {'message': f'User ID is missing, or is less than 2 characters'}, 400
            # look for password and dob
            password = body.get('password')
            dob = body.get('dob')

            ''' #1: Key code block, setup USER OBJECT '''
            uo = User(name=name, 
                      uid=uid)
            
            ''' Additional garbage error checking '''
            # set password if provided
            if password is not None:
                uo.set_password(password)
            # convert to date type
            if dob is not None:
                try:
                    uo.dob = datetime.strptime(dob, '%Y-%m-%d').date()
                except:
                    return {'message': f'Date of birth format error {dob}, must be mm-dd-yyyy'}, 400

# This is code from the user.py in the model
def create(self):
    try:
        # creates a person object from User(db.Model) class, passes initializers
        db.session.add(self)  # add prepares to persist person object to Users table
        db.session.commit()  # SqlAlchemy "unit of work pattern" requires a manual commit
        return self
    except IntegrityError:
        db.session.remove()
        return None
```
- After the data is send to the backend, it checks if it meets the requirements, or else it returns an error message
- The code tries to add a user to the database and if there is not an integrity error saves it by committing the change.

## Authenticate
### Frontend Code:
```
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/authenticate';

        // Set the body of the request to include login data from the DOM
        const body = {
            name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/data/database";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }
```
- The code above sets an authentication checkpoint and if there isn't a login error, the user is redirected to the database page
### Backend Code:
```
def post(self):
            try:
                body = request.get_json()
                if not body:
                    return {
                        "message": "Please provide user details",
                        "data": None,
                        "error": "Bad request"
                    }, 400
                ''' Get Data '''
                uid = body.get('uid')
                if uid is None:
                    return {'message': f'User ID is missing'}, 400
                password = body.get('password')
                
                ''' Find user '''
                user = User.query.filter_by(_uid=uid).first()
                if user is None or not user.is_password(password):
                    return {'message': f"Invalid user id or password"}, 400
                if user:
                    try:
                        token = jwt.encode(
                            {"_uid": user._uid},
                            current_app.config["SECRET_KEY"],
                            algorithm="HS256"
                        )
                        resp = Response("Authentication for %s successful" % (user._uid))
                        resp.set_cookie("jwt", token,
                                max_age=3600,
                                secure=True,
                                httponly=True,
                                path='/',
                                samesite='None'  # This is the key part for cross-site requests

                                # domain="frontend.com"
                                )
                        return resp
```
- The code checks if the user id and password match and if they do it creates a jwt token whic hit sends to the frontend which is what allowed the redirect into the database in the frontend
- This corresponds to the "R" in CRUD as nothing really being modified, but instead just checked
- After reaching the database page, the user's inside the database are being displayed with a GET request, which is also a read operation

## Updating the users
### Frontend
```
    fetch(url, authOptions)
    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/';

        // Set the body of the request to include login data from the DOM
        const body = {
            uid: document.getElementById("uid").value,
            dob: document.getElementById("dob").value,
            favfood: document.getElementById("favfood").value
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'PUT', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/data/database";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
```
- This is part of a function which is run when the data for edit user is submitted 
- It uses a PUT request to update a specific user
### Backend
```
    @token_required
    def put(self, current_user):
        body = request.get_json() # get the body of the request
        uid = body.get('uid') # get the UID (Know what to reference)
        dob = body.get('dob')
        if dob is not None:
            try:
                fdob = datetime.strptime(dob, '%Y-%m-%d').date()
            except:
                return {'message': f'Date of birth format error {dob}, must be mm-dd-yyyy'}, 400
        users = User.query.all()
        for user in users:
            if user.uid == uid:
                user.update('','','',fdob)
        return f"{user.read()} Updated"
```
- In the backend, it iterates through all of the users and if it matches one of the uids in the database then the user is updated
- This is an example of the "U" in CRUD

## Deleting users
### Frontend
```
const authOptions = {
    ...options, // This will copy all properties from options
    cache: 'no-cache',
    method: 'DELETE',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    },
};

// Fetch JWT
fetch(url, authOptions)
.then(response => {
    // handle error response from Web API
    if (!response.ok) {
        const errorMsg = 'Login error: ' + response.status;
        console.log(errorMsg);
        return;
    }
```
- DELETE request to the backend to remove a specific user
### Backend
```
def delete(self, current_user):
    body = request.get_json()
    uid = body.get('uid')
    users = User.query.all()
    for user in users:
        if user.uid == uid:
            user.delete()
    return jsonify(users.read())
```
- This is similar to the edit user part because it also iterates through the users to check if the user being deleted is in the database. If the user is, then the user is deleted
- Corresponds to the "D" in CRUD
