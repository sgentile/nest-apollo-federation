https://www.section.io/engineering-education/implementing-a-graphql-server-using-prisma-sqlite-and-nestjs-with-typescript/

1. add models to schema.prisma
2. generate migration:

```
npx prisma migrate dev --name <name>
```

3. create schema for graphql

ts-node src/generate-typings.ts

http://localhost:4001/graphql

```
# Write your query or mutation here
mutation generateUser{
    createUser(input:{
      name:"Steve Gentile"
    }){
      id
      name
    }
}
```

get users

```
query getUsers{
    users{
      id
      name
    }
}
```

single post

```
query getUser{
    user(id:1){
      id
      name
    }
}
```

updatePost

```
mutation updateUser{
    updateUser(input:{
      id:1,
      name: "Steven Gentile"
    }){
      id
      name
    }
}
```

delete post

```
mutation deleteUser{
    deleteUser(id:1){
      id
      name
    }
}
```
