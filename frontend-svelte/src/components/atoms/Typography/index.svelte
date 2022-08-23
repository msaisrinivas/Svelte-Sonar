<script>
  import { cssVarStyles } from "../../../theme/presets";
  export let variant = "caption1";
</script>

<div class={variant} style={cssVarStyles} data-testid="typography">
  <slot />
</div>

<style>
  .h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: 600;
    font-style: normal;
    line-height: 48px;
    text-transform: none;
    color: var(--black);
  }
  .h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    line-height: 30px;
    text-transform: none;
    color: var(--black);
  }
  .h6 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    line-height: 24px;
    text-transform: none;
    color: var(--black);
  }
  .subtitle1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: 24px;
    text-transform: none;
    color: var(--black);
  }
  .subtitle2 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    line-height: 24px;
    text-transform: none;
    color: var(--black);
  }

  .caption3 {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-style: none;
    line-height: 16px;
    text-transform: none;
    color: var(--red);
  }

  .caption2 {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-style: none;
    line-height: 16px;
    text-transform: none;

    color: var(--betaMedium);
  }
  .caption1 {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 700;
    font-style: none;
    line-height: 16px;
    text-transform: none;
    color: var(--betaMedium);
  }
  .body1 {
    font-family: "'Montserrat', sans-serif";
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    line-height: 22px;
    text-transform: none;
    letter-spacing: 1px;
    color: var(--white);
  }
  .body2 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    text-transform: none;
    color: var(--text3);
  }

  .subtitle5 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    line-height: 25.14px;
    text-transform: none;
  }
  .betaBody1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    line-height: 24px;
    text-transform: none;
  }
  .betaSubtitle1 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    line-height: 32px;
    text-transform: none;
  }
  .subtitle3 {
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.11px;
    font-family: "Montserrat", sans-serif;
  }
  .caption {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 22px;
    text-transform: none;
    color: var(--text3);
  }
</style>
