import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions, IconButton } from '@mui/material'
import { styled } from '@mui/system'

export default function MultiActionAreaCard({
  image,
  title,
  github,
  description,
  demo,
}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'grey.900' }}>
      <CardMedia component="img" height="140" image={image} alt={'image'} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Github
        </Button>
        {demo ? (
          <Button size="small" color="primary">
            Demo
          </Button>
        ) : null}
      </CardActions>
    </Card>
  )
}
