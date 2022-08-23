/** @jest-environment jsdom */

import Typography from "./index.svelte";
import { render } from "@testing-library/svelte";

it("Should check Typography atom", async () => {
  const { getByTestId } = render(Typography, {
    variant: "caption1",
  });

  const element = getByTestId("typography");
  expect(element).toBeDefined();
});
