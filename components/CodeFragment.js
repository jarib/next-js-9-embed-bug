import { Component, createRef } from "react";

export default class CodeFragment extends Component {
  componentDidMount() {
    const { html } = this.props;

    const node = this.node.current;

    if (node) {
      const range = document.createRange();
      range.selectNode(node);
      const fragment = range.createContextualFragment(html);
      node.appendChild(fragment);
      range.detach();
    }
  }

  node = createRef();

  render() {
    return <figure ref={this.node} />;
  }
}
