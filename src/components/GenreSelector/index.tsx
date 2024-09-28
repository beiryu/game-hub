import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { Genre } from "../../entities/Genre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenderSelector = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error } = useGenres();
  const selectedGenre = data?.results.find((g) => g.id === selectedGenreId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList>
        {data?.results.map((genre) => (
          <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenderSelector;
