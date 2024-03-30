export const Helpers = {
    slugToCamelCase: (slug: string): string => {
        return slug
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    },
    pluralize: (qty: number, singular: string, plural?: string): string => {
        if (!plural) plural = `${singular}s`;
        return `${qty > 1 ? plural : singular}`;
    }
};
