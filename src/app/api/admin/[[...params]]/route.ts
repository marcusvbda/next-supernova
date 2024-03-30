import Supernova from '@/packages/Supernova';
import { ResourceInitInterface } from '@/packages/Supernova/interfaces/resource';

export const GET = (req: any, params: ResourceInitInterface) => {
    return Supernova.apiGetRoutes(req, params);
};

export const POST = (req: any, params: ResourceInitInterface) => {
    return Supernova.apiPostRoutes(req, params);
};

export const DELETE = (req: any, params: ResourceInitInterface) => {
    return Supernova.apiDeleteRoutes(req, params);
};
