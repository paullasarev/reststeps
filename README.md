# reststeps
tutorial for step-by-step REST API implementation

API desctiption

The API should provide resources:

# GET /users

Returns JSON - list of users in format
<code>
[
  {
    id: 23423,
    name: 'Name',
    email: 'email@my.com'
  }
]
</code>

# GET /users/<id>

returns JSON

example:
  GET /users/23423

<code>
{
  id: 23423,
  name: 'Name',
  email: 'email@my.com'
}
</code>

# POST /users

# PUT /users/<id>

