# ReactJS+Redux Canvas Example

This is an example of a smart component built using HTML5 Canvas.

Live demo at 

components/CanvasNav.js displays an array of phrases sized to maximize the font and justified top bottom left and right. Any amount of text will be fit onto any size or aspect ratio delivering a responsive control. The coordinates of the phrases are kept by the component so the container doesn't have to know how the flow was solved. Each phrase can be selected or not and the highlighted phrase is backed by a pulsing glow. The text of any phrase clicked on is dispatched to the container.

containers/VisibleCanvasList.js configures CanvasNav and hooks up to the state with Redux.



