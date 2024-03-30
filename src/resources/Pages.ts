import Supernova from '@/packages/Supernova';

export default function Resource() {
    return Supernova.resource({
        labels: () => ['Page', 'Pages']
    });
}
