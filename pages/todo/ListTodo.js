import React from 'react'
import styles from '../../components/Todo/Todo.module.scss'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Image from 'next/image'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function ListTodo(props){
    return <div>
        <Grid container spacing={4} className={styles.gridContent}>
            {props.items.map(item => {
                console.log(item)
                return <Grid item xs={12} md={4}>
                        <Card className={styles.cardOuter} key={item.key}> 
                            <CardHeader className={styles.cardTitle} avatar={
                                <Avatar className={styles.avatar}>
                                    A
                                </Avatar>
                            }

                            action={
                                <IconButton aria-label="delete" onClick={() => {
                                    props.deleteItem(item.key)
                                }}>
                                    <i class="fas fa-trash"></i>
                                </IconButton>
                            }

                            title= "Onboarding"
                            >
                            </CardHeader>

                            <Link href={`/todo/detailTodo/${item.key}`}>
                                <a>
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
                                        <TextareaAutosize className={styles.addedContent} id={item.key} value={item.text} onChange={(e) => {
                                            props.setUpdate(e.target.value, item.key)
                                        }} />
                                    </CardContent>
                                </a>
                            </Link>
                        </Card>
                    </Grid>
            })}
        </Grid>
    </div>
}

