// Constants.js

const config = {
  margin: {
    top: 20,
    right: 50,
    bottom: 20,
    left: 30,
  },
  height: 400,
  width: 600,
  get adjustedHeight() { return this.height - this.margin.top - this.margin.bottom; },
  get adjustedWidth() { return this.width - this.margin.right - this.margin.left; },
};

export default config;
