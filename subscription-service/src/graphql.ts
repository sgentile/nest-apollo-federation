
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewPost {
    title: string;
    content: string;
}

export class Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
}

export abstract class IQuery {
    abstract test(): Nullable<string> | Promise<Nullable<string>>;
}

export abstract class ISubscription {
    abstract postAdded(): Post | Promise<Post>;
}

type Nullable<T> = T | null;
