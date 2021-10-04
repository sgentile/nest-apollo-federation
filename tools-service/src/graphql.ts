
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewTool {
    name: string;
    description: string;
    link: string;
    image?: Nullable<string>;
}

export class UpdateTool {
    id: string;
    name: string;
    description: string;
    link: string;
    image?: Nullable<string>;
}

export class Tool {
    id: string;
    name: string;
    description: string;
    link: string;
    image?: Nullable<string>;
}

export abstract class IMutation {
    abstract createTool(input?: Nullable<NewTool>): Tool | Promise<Tool>;

    abstract updateTool(input?: Nullable<UpdateTool>): Nullable<Tool> | Promise<Nullable<Tool>>;

    abstract deleteTool(id: string): Nullable<Tool> | Promise<Nullable<Tool>>;
}

export abstract class IQuery {
    abstract tools(): Tool[] | Promise<Tool[]>;

    abstract tool(id: string): Nullable<Tool> | Promise<Nullable<Tool>>;
}

type Nullable<T> = T | null;
