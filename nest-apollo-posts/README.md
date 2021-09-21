https://www.section.io/engineering-education/implementing-a-graphql-server-using-prisma-sqlite-and-nestjs-with-typescript/

1. add models to schema.prisma
2. generate migration:

```
npx prisma migrate dev --name <name>
```

3. create schema for graphql

ts-node src/generate-typings.ts

http://localhost:3000/graphql

```
mutation generatePost{
    createPost(input:{
      title:"A new second title"
      content:"A new second content"
    }){
      id
      title
      content
      published
      createdAt
    }
}
```

get posts

```
query GetPosts{
    posts{
      id
      title
      content
      published
      createdAt
    }
}
```

single post

```
query GetPost{
    post(id:1){
      id
      title
      content
      published
    }
}
```

updatePost

```
mutation updatePost{
    updatePost(input:{
      id:1,
      published:true
    }){
      id
      title
      content
      published
    }
}
```

delete post

```
mutation deletePost{
    deletePost(id:1){
      id
      title
      content
      published
    }
}
```
