import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">navbar</GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          aside
        </GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
