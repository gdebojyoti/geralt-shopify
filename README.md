# Geralt Shopify Theme

An upcoming theme for, well, Shopify!

Base project - https://github.com/polidario/Elizabeth_Clean

Tech stack - Liquid, TailwindCSS, AlpineJS


# Setup

* `shopify login` OR `shopify login --store <store link>`
* `shopify theme serve`


## Tailwind CSS stuff

cons
* code readability; humongous class attribute length - especially when hover states also need to be styled
* *research pending*

pros
* tiny
* scalable

things to figure out
* states (hover, selected, etc) // peer-checked:text-white
* transitions & animations
* responsive styles; define custom viewport sizes
* background images
* multiple bg shadow or bg img
* theme / dark mode support
* css variables
* overriding styles
* style overrides via props in react (eg: created menu component for desktop; how to override styles of the same component to be used in mobile devices)

read
* https://stackoverflow.com/questions/54618144/tailwind-css-how-to-code-pixel-perfect-design
