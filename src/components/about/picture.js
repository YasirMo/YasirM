import { Show, Square } from "@chakra-ui/react";

function picture() {
  return (
    <Show above="xl">
      <Square size="400px" rounded="3xl" overflow="hidden">
        <img src="/Yasir.jpg" alt="Developer" placeholder="blur" priority />

      </Square>
    </Show>
  );
}
export default picture