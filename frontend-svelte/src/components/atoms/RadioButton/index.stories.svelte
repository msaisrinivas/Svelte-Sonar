<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Radio from './index.svelte';
</script>

<Meta title="atoms/Radio" component={Radio}/>

<Template let:args>
  <Radio {...args}/>
</Template>

<Story name="selected" args={{checked: true}}/>

<Story name="unSelected" args={{checked: false}}/>