import styles from './Notecard.module.scss'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Image from 'next/image'
import Link from 'next/link'

export default function LinkCard() {
    return (
        <Link href="/">
            <a>
                <Card className={styles.cardOuter}>
                    <CardHeader avatar={
                        <Avatar className={styles.avatar}>
                            A
                        </Avatar>
                    }

                    action={
                        <IconButton aria-label="delete">
                            <i class="fas fa-trash"></i>
                        </IconButton>
                    }

                    title="On your First Day"a
                    subheader="January 11, 2021"a
                    />

                    <CardMedia
                    >
                        <Image
                            src="/images/2.jpg"
                            alt="Picture of the author"
                            width={500}
                            height={300}
                            />
                    </CardMedia>
                    <CardContent className={styles.gridTitle}>
                        <h5>Get a Tour of the Grepsr Facility</h5>
                    </CardContent>
                </Card>
            </a>
        </Link>
    );
}