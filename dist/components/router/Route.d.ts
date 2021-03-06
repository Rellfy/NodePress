/// <reference types="node" />
import { ServerResponse, IncomingMessage } from 'http';
import Fastify from 'fastify';
import * as React from 'react';
import { RouteModel } from "./RouteModel";
import { Router } from "./Router";
declare abstract class Route {
    protected router: Router;
    component: typeof React.Component;
    set Router(value: Router);
    abstract get route(): RouteModel;
    private static getDescendantProp;
    /**
     * Iterate through request object and throw an exception if it doesn't
     * match the schema for the route.
     * TODO: This should also be requested from the front-end when browsing via react router.
     */
    static iterate(request: any, object: any, stack?: string): void;
    static isAuthenticated(route: RouteModel, request: Fastify.FastifyRequest<IncomingMessage>): boolean;
    process(request: any, reply: Fastify.FastifyReply<ServerResponse>, redirectUrl?: string): Promise<any>;
}
export { Route };
