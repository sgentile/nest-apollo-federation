## Setup

use docker

```
make build
make up
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
