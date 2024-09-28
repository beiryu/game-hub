import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import GenderSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { useState } from "react";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Show below="lg">
              <Box marginRight={5}>
                <GenderSelector
                  selectedGenreId={gameQuery.genreId}
                  onSelectGenre={(genre) =>
                    setGameQuery({ ...gameQuery, genreId: genre.id })
                  }
                />
              </Box>
            </Show>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <Box marginRight={5}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
