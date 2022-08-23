<script>
  import {cssVarStyles} from "../../../theme/presets"
  export let checked = true;

</script>

<label class="container" style={cssVarStyles}>
  <input type="checkbox" {checked} data-testid="checkbox"  />
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
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #eee;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
      inset 0 0 0 rgba(16, 22, 26, 0.1);
    border-radius: 4px;
  }
  .container input:checked ~ .checkmark {
    /* background-color: #30a193; */
    background-color: var(--primary);
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
    left: 5.6px;
    top: 0.7px;
    width: 3px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
