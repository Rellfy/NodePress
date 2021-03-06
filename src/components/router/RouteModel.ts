type HTTPMethod = "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

/**
 * The RouteModel defines the properties of a NetRoute
 */
class RouteModel {
    
    public method: HTTPMethod;
    public endpoint: string;
    public auth: boolean;
    /**
     * Whether to render this route only if the current path matches the route's endpoint exactly.
     */
    public exactPath: boolean = true;
    public schema: any;
    public handler: Function;

    constructor(model: { method: HTTPMethod, endpoint: string, auth?: boolean, schema: any, handler: Function }) {
        this.method = model.method;
        this.endpoint = model.endpoint;
        this.auth = model.auth ? true : false;
        this.schema = model.schema;
        this.handler = model.handler;
    }

}

export { RouteModel, HTTPMethod };