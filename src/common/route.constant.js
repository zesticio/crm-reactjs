const PULBIC_ROUTE = {
    other : "*",
    landing : '/'
}

const RESTRICTED_ROUTE = {
    login : 'login',
    otp : 'otp'
}

const PRIVATE_ROUTE = {
    dashboard : 'dashboard',
    contacts : 'contacts',
    order :  'order',
    task : "task",
    organization : "organization",
    vendor : "vendor",
    customers : "customers",
    employee : "employee",
    countries : "countries",
    state : "state",
    cities : "cities",
    tiers : "tiers",
    warehouses :  "warehouses",
    profile : "profile"
}

const ROUTE_TYPE = {
    private : "private",
    public : "public",
    restricted : "restricted"
}

export {
    PRIVATE_ROUTE,
    PULBIC_ROUTE,
    ROUTE_TYPE,
    RESTRICTED_ROUTE
}