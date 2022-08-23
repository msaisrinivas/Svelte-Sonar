<script lang="ts">
	import Button from "./components/atoms/checkBox/index.svelte"
	import Radio from "./components/atoms/RadioButton/index.svelte"
	import Typography from "./components/atoms/Typography/index.svelte"

	export let name: string;
</script>

<main>
	<Button checked={true}/> 
	<Radio checked={true} />
	<br/>
	<Typography variant={"caption1"}>testing text</Typography>
</main>

<style>
	
</style>