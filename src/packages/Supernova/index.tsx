import { notFound } from 'next/navigation';
import {
    ResourceInfoInterface,
    ResourceInitInterface,
    SupernovaInterface
} from './interfaces/resource';
import { resource } from './resource';
import ResourceList from './components/ResourceList';
import { Helpers } from './Helpers';

const Supernova: SupernovaInterface = {
    resource: (info: ResourceInfoInterface) => {
        return { ...resource, ...info };
    },
    apiGetRoutes(req: any, params: ResourceInitInterface) {
        return Response.json(
            { message: 'Hello World GET', params },
            { status: 200 }
        );
    },
    apiPostRoutes(req: any, params: ResourceInitInterface) {
        return Response.json(
            { message: 'Hello World POST', params },
            { status: 200 }
        );
    },
    apiDeleteRoutes(req: any, params: ResourceInitInterface) {
        return Response.json(
            { message: 'Hello World DELETE', params },
            { status: 200 }
        );
    },
    init: ({ params }: ResourceInitInterface) => {
        if (!params.params) return <>home CONTENT</>;
        if (params.params.length === 1) {
            return Supernova.makeResourceList(params.params[0]);
        }
        if (params.params.length === 2) return <>resource create</>;
        if (params.params.length === 3) return <>resource detail</>;
        if (params.params.length === 4) return <>resource edit ou delete</>;
        return notFound();
    },
    makeResourceList: (slug: string): JSX.Element => {
        try {
            const resourceName: string = Helpers.slugToCamelCase(slug);
            const resource = require(`@/resources/${resourceName}`);
            return Supernova.resourceList(resource.default());
        } catch (error) {
            console.error(error);
            return notFound();
        }
    },
    resourceList: (resource: ResourceInfoInterface): JSX.Element => {
        return <ResourceList resource={resource} />;
    }
};

export default Supernova;
