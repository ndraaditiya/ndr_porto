import { Card, CardMedia, CardContent, Tooltip } from '@mui/material'

const CardContainer = ({ 
  picture,
  width,
  height,
  link,
  title,
  children
}) => {
  return (
    <>
      <Tooltip title={title ?? "Go to Website"} placement='top'>
        <Card sx={{ width, margin: 0.8, cursor: 'pointer' }}>
          <a href={link} target='_blank'>
            <CardMedia
              component="img"
              height={height}
              image={`/images/${picture}`}
            />
            <CardContent>
              {children}
            </CardContent>
          </a>
        </Card>
      </Tooltip>
    </>
  );
}

export default CardContainer;
