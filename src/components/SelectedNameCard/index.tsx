import { CardContent, Typography, CardActions, Button, Card } from "@mui/material";
import React from "react";

type Props = {
    name: string,
    cardAction?: () => void
    cardActionName?: string
}

export const SelectedNameCard: React.FC<Props> = ({ name, cardAction, cardActionName }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    The chosen name was
                </Typography>
                <Typography variant="h2" align="center">
                    {name}
                </Typography>
            </CardContent>
            {
                cardAction && cardActionName && (
                    <CardActions>
                        <Button size="small" onClick={cardAction}>
                            {cardActionName}
                        </Button>
                    </CardActions>
                )
            }
        </Card>
    );
}