# Day 7 - Fun with HTML5 Canvas
> 21 July 2017

[Click here to see DEMO](https://noeemi.github.io/JavaScript30/Day08-HTML5Canvas/)

## New  knowledge:
### Canvas:
**The <canvas> element**
`<canvas id="tutorial" width="150" height="150"**></canvas>`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

**The rendering context** - the <canvas> element creates a fixed-size drawing surface that exposes one or more rendering contexts, which are used to create and manipulate the content shown.
`var canvas = document.getElementById('tutorial');`
`var ctx = canvas.getContext('2d');`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

**ctx.strokeStyle** property of the Canvas 2D API specifies the color or style to use for the lines around shapes. The default is #000.
`ctx.strokeStyle = '#BADA55';`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

**ctx.lineJoin** property of the Canvas 2D API determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together.
`ctx.lineJoin = 'round';`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)

**ctx.lineCap** property of the Canvas 2D API determines how the end points of every line are drawn. There are three possible values for this property and those are: *butt*, *round* and *square*.
`ctx.lineCap = 'round';`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap)

**ctx.lineWidth** property of the Canvas 2D API sets the thickness of lines in space units.
`ctx.lineWidth = 50;`
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)

**ctx.beginPath()** method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)

**ctx.moveTo()** method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)

**ctx.lineTo()** method of the Canvas 2D API connects the last point in the sub-path to the x, y coordinates with a straight line (but does not actually draw it).
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)

**ctx.stroke()** method of the Canvas 2D API strokes the current or given path with the current stroke style using the non-zero winding rule.
> source: [mdn](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)

### Mouse events:
* *mousedown* - [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mousedown)
* *mouseup* - [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mouseup)
* *mousemove* - [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove)
* *mouseout* - [mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout)
