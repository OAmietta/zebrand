import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <!-- Font Awesome --> */}
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                        rel="stylesheet"
                    />
                    {/* <!-- Google Fonts --> */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <!-- MDB --> */}
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
                        rel="stylesheet"
                    />
                    {/* <!-- MDB --> */}
                    <script
                        type="text/javascript"
                        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"
                        async />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;