


export interface NavbarOptions {
    Options: string;
    SubOptions?: string;
    route: string;
   
}

export interface RouteNav {
    route?: string
}

export const navbar : NavbarOptions[] = [
    {
            Options: "Home",
            route: "/"
           
    },
    {
            Options: "About",
            route:"/about"

    },
    {
            Options: "Services",
            route: "/services"
    },
    {
            Options: "Contact",
            route: "/services"
    }
];