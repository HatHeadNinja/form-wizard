import React from "react"
import { Grid, Card, CardContent, Typography } from "@mui/material"
import { CardActionArea } from '@mui/material';

import { getEntityDetailsByID, getJurisdictionByID } from "../../data/data"

function EntityCard(props) {

  const entity = getEntityDetailsByID(props.id)
  const jurisdiction = getJurisdictionByID(entity.jurisdictionID)

  const cardStyle = {
    bgcolor: 'background.paper',
    border: '1px solid #a9a9a9',
    mt: 1,
    mb: 2,
  }

  const jurisdictionStyle = {
    fontSize: 14, 
    ml: 1, 
    mr: 1, 
    color: "darkgrey"
  }

  const addressStyle = {
    fontSize: 14, 
    ml: 1, 
    mr: 1, 
    color: "darkgrey",
  }

  return (

    <Grid>
      <Card sx={cardStyle}>
        <CardActionArea>
          <CardContent>
            <Grid>
              <Typography sx={{ml: 1, mr: 1}}>{entity.name}, LLC</Typography>
              <Typography variant="overline" sx={jurisdictionStyle}>{jurisdiction.name}</Typography>
              <Typography sx={addressStyle} noWrap>{entity.address}</Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

  )

}

export default EntityCard;