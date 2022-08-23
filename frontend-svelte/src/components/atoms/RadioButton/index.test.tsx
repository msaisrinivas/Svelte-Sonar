/** @jest-environment jsdom */

import Radio from "./index.svelte";
import { render } from "@testing-library/svelte";

it("Should check Radio atom", async () => {
  const { getByTestId } = render(Radio, {
    checked: true,
  });

  const element = getByTestId("radio");
  expect(element).toBeDefined();
});
