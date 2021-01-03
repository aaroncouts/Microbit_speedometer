This program requires a BBC Micro:bit wired with the following:
 1. An external normally-open button that, when pressed, routes VCC to pin 0.
 2. A distance sensor (RCWL-1602 recommended) with trigger on pin 1 and echo on pin 2.
 
To use, point the distance sensor at something that is leaving (such as someone running away from you) or approaching (such as someone running toward you, or at a wall you are walking toward.  Hit the external button to take a speed reading.

The speed in miles per hour will display on the microbit's LED display.

After taking a reading, button A on the microbit will show the speed in kilometers per hour.  Button B will show the miles per hour again.



> Open this page at [https://aaroncouts.github.io/microbit_speedometer/](https://aaroncouts.github.io/microbit_speedometer/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/aaroncouts/microbit_speedometer** and import

## Edit this project ![Build status badge](https://github.com/aaroncouts/microbit_speedometer/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/aaroncouts/microbit_speedometer** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/aaroncouts/microbit_speedometer/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
