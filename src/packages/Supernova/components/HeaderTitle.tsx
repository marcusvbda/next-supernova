'use client';

import { useEffect } from 'react';

interface IProps {
    title?: string;
}

export default function HeaderTitle({ title }: IProps) {
    useEffect(() => {
        const appName = process.env.NEXT_PUBLIC_APP_NAME;
        window.document.title = `${title ? `${title} | ` : ''} ${appName}`;
    }, [title]);

    return <></>;
}
