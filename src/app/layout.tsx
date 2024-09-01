import { ReactNode } from 'react';

export const metadata = {
    title: 'Next.js',
    description: 'Next template project'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
