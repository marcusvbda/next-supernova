import { notFound } from 'next/navigation';
import {
    ResourceInfoInterface,
    ResourceInitInterface,
    SupernovaInterface
} from './interfaces/resource';
import { resource } from './resource';

const Supernova: SupernovaInterface = {
    resource: (info: ResourceInfoInterface) => {
        return { ...resource, ...info };
    },
    init: ({ params }: ResourceInitInterface) => {
        if (!params.params) return <>DASHBOARD CONTENT</>;
        if (params.params.length === 1) {
            return Supernova.makeResourceList(params.params[0]);
        }
        // if (params.params.length === 2) return <>resource create</>;
        // if (params.params.length === 3) return <>resource detail</>;
        // if (params.params.length === 4) return <>resource edit ou delete</>;
        return notFound();
    },
    slugToCamelCase: (slug: string): string => {
        return slug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    },
    makeResourceList: (slug: string): JSX.Element => {
        try {
            const resourceName = Supernova.slugToCamelCase(slug);
            const resource = require(`@/resources/${resourceName}`);
            return Supernova.resourceList(resource.default());
        } catch (error) {
            console.error(error);
            return notFound();
        }
    },
    resourceList: (resource: ResourceInfoInterface): JSX.Element => {
        return <>Resource {resource.label}</>;
    }
};

export default Supernova;