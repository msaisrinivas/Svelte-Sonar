<script>
  import { cssVarStyles } from "../../../theme/presets";
  export let checked = true;
</script>

<label class="container" style={cssVarStyles}>
  <input type="radio" {checked} name="radio" data-testid="radio" />
  <span class="checkmark" />
</label>

<style>
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 0 0 rgba(16, 22, 26, 0.1);
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: var(--secondary);
    box-shadow: inset 0 0 0 0px rgba(16, 22, 26, 0.2),
      inset 0 0 0 rgba(16, 22, 26, 0.1);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 0.2rem;
    left: 0.19rem;
    right: inherit;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
</style>
