import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNameDataset } from "../../contexts/NameDataset";
import { SelectedNameCard } from "../SelectedNameCard";

export const NameGenerator: React.FC = () => {
    const dataset = useNameDataset();
    const [selectedName, setSelectedName] = useState<string | undefined>()

    const generateBabyName = (gender: "FEMALE" | "MALE") => {
        const genderNames = dataset.filter(([_year, babyGender]) => gender === babyGender);
        const idx = Math.floor(Math.random() * genderNames.length);
        const [_year, _gender, _ethnicity, name, _noBabies, _rank] = genderNames[idx]
        setSelectedName(name)
    }

    return (
        <Grid container rowSpacing={3}>
            <Grid item container columnSpacing={1}>
                <Grid item sm={6}>
                    <Button variant="contained" color="secondary" fullWidth onClick={() => generateBabyName("FEMALE")}>Female</Button>
                </Grid>
                <Grid item sm={6}>
                    <Button variant="contained" fullWidth onClick={() => generateBabyName("MALE")}>Male</Button>
                </Grid>
            </Grid>
            {
                selectedName && (
                    <Grid item sm={12}>
                        <SelectedNameCard 
                            name={selectedName}
                            cardAction={() => setSelectedName(undefined)}
                            cardActionName="Clear"
                        />
                    </Grid>
                )
            }
        </Grid>
    );
}