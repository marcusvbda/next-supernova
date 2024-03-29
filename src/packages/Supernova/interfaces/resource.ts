export interface ResourceInitInterface {
    params: { params: string };
}

export interface ResourceInfoInterface {
    label?: string;
}

export interface SupernovaInterface {
    init: ({ params }: ResourceInitInterface) => JSX.Element;
    makeResourceList: (resourceName: string) => JSX.Element;
    resourceList: (resource: ResourceInfoInterface) => JSX.Element;
    slugToCamelCase: (slug: string) => string;
    resource: (info: ResourceInfoInterface) => ResourceInfoInterface;
}
