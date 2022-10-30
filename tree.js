// TASK ITSELF //


const dom = {
  type: "div",
  props: {
    children: [{
      type: "h1",
      props: {
        children: " this os "  // <-- text node
      }
    }]
  }
}

const render = (dom) => {
  let { type, props: { children, ...otherPorps  } = dom;

  const el = document.createElement(type);

  if(children) {
    if(!Array.isArray(children)) {
      children = [children];
    }

    children.forEach((child) => {
      el.append(render(child));
    });
  }

  if(otherPorps) {
    for (const [key, value] of Object.entries(otherPorps)) {
      el.setAttribure(key === 'className' ? 'class' : key, value);
    }
  }

  return el

};

document.body.append(render(dom));

