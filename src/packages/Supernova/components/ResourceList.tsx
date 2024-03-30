import { ResourceInfoInterface } from '../interfaces/resource';
import HeaderTitle from './HeaderTitle';

interface IProps {
    resource: ResourceInfoInterface;
}

export default function ResourceList({ resource }: IProps): JSX.Element {
    const [singularLabel, pluralLabel] = resource.labels();

    return (
        <>
            <HeaderTitle title={pluralLabel} />
            asdasd
        </>
    );
}
