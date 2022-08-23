<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TypographyAtom from './index.svelte';
</script>

<Meta title="atoms/Typography" component={TypographyAtom}/>

<Template let:args>
  <TypographyAtom {...args}>Test text</TypographyAtom>
</Template>

<Story name="h1" args={{variant: "h1"}}/>

<Story name="h3" args={{variant: "h3"}}/>

<Story name="h6" args={{variant: "h6"}}/>

<Story name="subtitle1" args={{variant: "subtitle1"}}/>

<Story name="subtitle2" args={{variant: "subtitle2"}}/>

<Story name="caption" args={{variant: "caption"}}/>
<Story name="caption1" args={{variant: "caption1"}}/>
<Story name="caption2" args={{variant: "caption2"}}/>
<Story name="caption3" args={{variant: "caption3"}}/>

<Story name="body1" args={{variant: "body1"}}/>
<Story name="body2" args={{variant: "body2"}}/>

