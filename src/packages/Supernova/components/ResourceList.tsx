import { Helpers } from '../Helpers';
import { ResourceInfoInterface } from '../interfaces/resource';
import '../styles.scss';
interface IProps {
    resource: ResourceInfoInterface;
}

export default function ResourceList({ resource }: IProps): JSX.Element {
    const [singularLabel, pluralLabel] = resource.labels();
    const qtyTotal = 2;

    return (
        <section id="resource-list">
            <div className="flex-row">
                <div className="flex-col">
                    <h1 className="resource-title">{singularLabel}</h1>
                    <small>
                        {qtyTotal} {Helpers.pluralize(qtyTotal, 'Registro')}
                    </small>
                </div>
            </div>
            <hr />
            <div className="flex-row">
                <div className="flex-col">LIST HERE</div>
            </div>
        </section>
    );
}
