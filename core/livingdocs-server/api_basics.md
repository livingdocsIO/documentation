# API Basics

## Structure basics

The API is completely stateless, i.e. the response does never set any cookies
and there is no notion of session on the server side.

The endpoints usually follow RESTful routes. Sticking to RESTful routes has the
advantage that you know right away how to do the requests and where to find
stuff. Given a resource called `photo`, the RESTful routes for this resource
look as follows (assuming that there are many photos).

`GET /photos` display a list of all photos  
`POST /photos` create a new photo  
`GET /photos/:id` display a specific photo  
`PATCH/PUT /photos/:id` update a specific photo  
`DELETE /photos/:id` delete a specific photo

There are cases when there's only one instance of a resource, e.g. the user's
account. For the singular resource `account`, the routes look as follows:

`POST /account` create the new account  
`GET /account` display the one and only account resource  
`PATCH/PUT /account` update the one and only account resource  
`DELETE /account` delete the account resource

Note that it is not required to implement all RESTful routes for a resource.
Often only one or two are needed, depending on the needs of the client consuming
the API.

Before adding a non-RESTful endpoint to an existing resource, say for toggling
the publication of a document, consider implementing it as a sub-resource. This
is how a non-RESTful way of doing this would look like:

`POST /document/:id/mark_as_public` make the document public  
`POST /document/:id/mark_as_private` make the document private

A better, easier to grasp way to accomplish this using RESTful routes would be:

`POST /document/:id/publication` make the document public  
`DELETE /document/:id/publication` make the document private