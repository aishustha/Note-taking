import styles from './Notecard.module.scss'
import Grid from '@material-ui/core/Grid'
import LinkCard from './LinkCard'

export default function NoteCard() {
    return (
        <Grid container spacing={3} className={styles.gridContent}>
            <Grid item xs={3}>
                <LinkCard/>
            </Grid>
            <Grid item xs={3}>
                <LinkCard/>
            </Grid>
            <Grid item xs={3}>
                <LinkCard/>
            </Grid>
            <Grid item xs={3}>
                <LinkCard/>
            </Grid>
        </Grid>
    );
}