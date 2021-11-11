// Type definitions for node-bigcommerce x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Torbjorn van Heeswijck <https://github.com/tvhees>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Agent } from 'https';

declare class Request {
    constructor(hostname: string, { headers, failOnLimitReached, agent }?: {
        headers?: Record<string, string>;
        failOnLimitReached?: boolean;
        agent?: Agent;
    });
    hostname: string;
    headers: Record<string, string>;
    failOnLimitReached: boolean;
    agent: Agent;
    run(method: string, path: string, data: any): Promise<any>;
}

interface Config {
    clientId?: string
    secret?: string
    callback?: string
    accessToken?: string
    storeHash?: string
    responseType?: 'json' | 'xml'
    headers?: Record<string, string>
    apiVersion?: string
    failOnLimitReached?: boolean
}

interface Query {
    code: any
    scope: any
    context: any
}

interface AuthorizeResult {
    access_token: string
    [key: string]: any
}

interface VerifyResult {
    user: {
        id: number
        email: string
    }
    context: string
    store_hash: string
    timestamp: number
}

declare class BigCommerce {
    constructor(config: Config);
    config: any;
    apiVersion: any;
    verify(signedRequest: string): VerifyResult;
    authorize(query: Query): Promise<AuthorizeResult>;
    createAPIRequest(): Request;
    request(type: string, path: string, data: any): Promise<any>;
    get(path: string): Promise<any>;
    post(path: string, data: any): Promise<any>;
    put(path: string, data: any): Promise<any>;
    delete(path: string): Promise<any>;
}

export = BigCommerce;