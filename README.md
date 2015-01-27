jquery.panez
============

Lightweight jQuery plugin to provide flexible tab/pane functionality

## Features

**lighweight** 
- js: only x.xk compressed

**flexible**
- No markup conventions! No container divs, unordered list required!

**compatabile**
- ie6 and up
- modern browsers

**modular**
- install via bower dependency manager
- distributed with source js files

## Example

**css** (Optional)

    <link rel="stylesheet" href="jquery.zoomz.css" />

**Javascript**

$('[data-panez]').panez();

**HTML**

<div id="id-for-pane" class="panez-group"></div>
<div data-panez="id-for-pane" data-panez-group="panez-group"></div>

## Installation

    bower install git+ssh://git@github.com:bencooling/jquery.panez.git

## FAQ

1. Why must I have attributes for each selector?
With all of the excellent templating languages available, markup is cheap.
Removing markup conventions maximises its flexibility to handle edge and trivial cases.
