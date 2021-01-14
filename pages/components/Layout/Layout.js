import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.scss'

const Layout = (props) => (
    <div className={styles.overflowBody}>
        <Head>
            <title>Note Taking Application</title>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />

            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js"
            />
        </Head>

        <div className={styles.noteHeader}>
            {props.children}
        </div>
    </div>
)


export default Layout;