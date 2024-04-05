import { useState } from "react";

export function Teste() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleTouchMove = (event:any) => {
        const touch = event.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
    };

    return (
        <div style={{ height: '100vh' }} onTouchMove={handleTouchMove}>
          <h1>Movimento do Toque</h1>
          <p>X: {position.x}, Y: {position.y}</p>
        </div>
      );
}