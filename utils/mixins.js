import { css } from 'styled-components'

const spaceMixins = css`
  ${p => p.m && `margin: ${p.m}px`};
  ${p => p.mx && `margin: 0 ${p.mx}px`};
  ${p => p.my && `margin: ${p.my}px 0`};
  ${p => p.ml && `margin-left: ${p.ml}px`};
  ${p => p.mla && 'margin-left: auto'};
  ${p => p.mr && `margin-right: ${p.mr}px`};
  ${p => p.mt && `margin-top: ${p.mt}px`};
  ${p => p.mb && `margin-bottom: ${p.mb}px`};
  ${p => p.mxa && 'margin: 0 auto'};
  ${p => p.p && `padding: ${p.p}px`};
  ${p => p.px && `padding: 0 ${p.px}px`};
  ${p => p.py && `padding: ${p.py}px 0`};
  ${p => p.pl && `padding-left: ${p.pl}px`};
  ${p => p.pr && `padding-right: ${p.pr}px`};
  ${p => p.pt && `padding-top: ${p.pt}px`};
  ${p => p.pb && `padding-bottom: ${p.pb}px`};
`

const shadowMixins = css`
  ${p => p.shadow && 'box-shadow: 0 2px 4px 0 rgba(100, 100, 100, 0.5)'};
  ${p => p.shadow_sm && 'box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px'};
  ${p => p.shadow_none && 'box-shadow: unset'};
`

export {
  spaceMixins,
  shadowMixins,
}
