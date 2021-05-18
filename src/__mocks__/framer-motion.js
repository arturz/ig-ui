import * as React from 'react';

const actual = jest.requireActual('framer-motion');

// https://github.com/framer/motion/blob/main/src/render/dom/motion.ts
function custom(Component, _customMotionComponentConfig) {
  return React.forwardRef((props, ref) => {
    const regularProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !actual.isValidMotionProp(key))
    );
    return typeof Component === 'string' ? (
      React.createElement(Component, { ...regularProps, ...ref })
    ) : (
      //<div ref={ref} {...regularProps} />
      <Component ref={ref} {...regularProps} />
    );
  });
}

const componentCache = new Map();
const motion = new Proxy(custom, {
  get: (_target, key) => {
    if (!componentCache.has(key)) {
      componentCache.set(key, custom(key));
    }

    return componentCache.get(key);
  },
});

module.exports = {
  __esModule: true,
  ...actual,
  AnimatePresence: ({ children }) => <>{children}</>,
  motion,
};
