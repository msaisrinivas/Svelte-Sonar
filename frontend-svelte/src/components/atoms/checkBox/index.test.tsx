/** @jest-environment jsdom */

import Checkbox from "./index.svelte";
import { render } from "@testing-library/svelte";


it("Should check checkbox atom", async () => {
  const { getByTestId } = render(Checkbox, {
    checked:true
  });

  const element = getByTestId("checkbox");
  expect(element).toBeDefined();
  expect(element).toHaveClass("svelte-1vszf2h");
});