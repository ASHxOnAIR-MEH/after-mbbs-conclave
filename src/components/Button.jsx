import React, { useState } from 'react';

export default function Button({ children, className = '', variant = 'primary', onClick, href, target, ...props }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    if (onClick) {
      onClick(e);
    }
  };

  const onAnimationEnd = (id) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  const btnClass = `btn btn-${variant} ${className}`;

  const content = (
    <>
      {children}
      <div className="ripple-container">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-effect"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50
            }}
            onAnimationEnd={() => onAnimationEnd(ripple.id)}
          />
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={btnClass} onClick={addRipple} target={target} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={btnClass} onClick={addRipple} {...props}>
      {content}
    </button>
  );
}
