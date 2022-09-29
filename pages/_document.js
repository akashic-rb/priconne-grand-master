import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    
    return (
        <Html>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanmp-noto.min.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
 
export default Document;