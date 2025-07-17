// API module for EurekaChat

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 33
module.exports = API;


// API module for EurekaChat

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 35
module.exports = API;


// API module for EurekaChat

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 38
module.exports = API;


// API module for EurekaChat

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 45
module.exports = API;
