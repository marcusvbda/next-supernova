import Supernova from '@/packages/Supernova';
import { ResourceInitInterface } from '@/packages/Supernova/interfaces/resource';

export default function Page(params: ResourceInitInterface) {
    return Supernova.init(params);
}
