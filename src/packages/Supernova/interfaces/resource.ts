export interface ResourceInitInterface {
    params: { params?: string };
}

export interface ResourceInfoInterface {
    labels: () => string[];
}

export interface SupernovaInterface {
    init: ({ params }: ResourceInitInterface) => JSX.Element;
    apiGetRoutes: (req: any, params: any) => any;
    apiDeleteRoutes: (req: any, params: any) => any;
    apiPostRoutes: (req: any, params: any) => any;
    makeResourceList: (resourceName: string) => JSX.Element;
    resourceList: (resource: ResourceInfoInterface) => JSX.Element;
    resource: (info: ResourceInfoInterface) => ResourceInfoInterface;
}
