import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useMenuForRestaurant } from '../lib/apiClient';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    width: theme.spacing(50),
  },
}));

export default function Menu(){
  const { loading, error, menu } = useMenuForRestaurant('taqdelsol');
  if (loading || error ){
    return <div>loading...</div>;
  }

  return (
      <Container maxWidth="md">
      <Grid
        container
        spacing="4"
        direction="column"
        justify="center"
        alignItems="center"
      >
        {
          menu.items.map( mi => <MenuItem key={mi.id} {...mi}/> )
        }
      </Grid>
    </Container>
  );
}

function MenuItem({name,description,price}){
  const classes = useStyles();

  return (
      <Grid item xs={8}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography color="textSecondary">
            <Money {...price}/>
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
      </Grid>
  );
}

const formatDollars = new Intl.NumberFormat().format;
function formatCents(cents){
  return leftPad(cents,"00")
}
function leftPad(str,pad){
  str = str.toString();
  return pad.substring(0, pad.length - str.length) + str;
}

function Money({dollars,cents}){
  return (
      <span>${formatDollars(dollars)}.{formatCents(cents)}</span>
  );
}
