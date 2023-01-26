import { Grid, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import ChangeLanguageButton from "../buttons/ChangeLanguageButton";
import ChangeThemeButton from "../buttons/ChangeThemeButton";

export default function Header() {
  return (
    <Grid container className="flex justify-between p-4">
      <Grid item xs={8}>
        <h1>Titulo</h1>
      </Grid>
      <Grid container item xs={4} className="flex justify-end">
        <Stack 
          direction="row" 
          spacing={3} 
          divider={<Divider orientation="vertical" flexItem />}
        >
          <ChangeThemeButton />
          <ChangeLanguageButton />
        </Stack>
      </Grid>
    </Grid>
  );
}
