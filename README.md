## Setup

use docker

```
make build
make up
```

Before attempting to add a post, create an initial user with the playground:
ie. on http://[::1]:4002/api

```
mutation generateUser{
    createUser(input:{
      name:"Steve Gentile"
    }){
      id
      name
    }
}
```

Example of adding a post with the playground:

```
mutation generatePost{
    createPost(input:{
      title:"Hello World"
      content:"Happy Friday2",
      userId: 1,
    }){
      id
      title
      content
      published
      createdAt
      user {
        id
        name
      }
    }
}
```

Example removing a post:

```
mutation deletePost {
  deletePost(id: 15) {
    id
  }
}
```

Lastly, view all users and posts:

```
query ExampleQuery {
 posts {
   id
   content
   user {
     id
     name
   }
 }
 users {
   id
   name
 }
}
```

## Prisma

https://www.prisma.io/docs/reference/api-reference/command-reference

npx prisma migrate dev --name init

To run npx prisma migrate dev

npx prisma generate

Setup a new Prisma project

$ prisma init

Generate artifacts (e.g. Prisma Client)
$ prisma generate

Browse your data
$ prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ prisma db pull

Push the Prisma schema state to the database
$ prisma db push
