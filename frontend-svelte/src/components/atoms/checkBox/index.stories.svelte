<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import CheckBoxAtom from './index.svelte';
</script>

<Meta title="atoms/Checkbox" component={CheckBoxAtom} />

<Template let:args>
  <CheckBoxAtom {...args}/>
</Template>

<Story name="Checked" args={{checked: true}} />

<Story name="unChecked" args={{checked: false}} />