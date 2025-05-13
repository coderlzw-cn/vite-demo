import { useKeyPress } from '../hooks/useKeyPress';

export function KeyPressDemo() {
  // 监听单个按键
  const isSpacePressed = useKeyPress(' ', (event) => {
    console.log('Space pressed!', event);
  });

  // 监听多个按键
  const isArrowPressed = useKeyPress(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'], (event) => {
    console.log('Arrow key pressed:', event.key);
  });

  // 使用自定义函数判断按键
  const isModifierPressed = useKeyPress(
    (event) => event.ctrlKey || event.altKey || event.metaKey,
    (event) => {
      console.log('Modifier key pressed:', event.key);
    }
  );

  return (
    <div className="key-press-demo">
      <h2>Key Press Demo</h2>
      <div className="key-status">
        <div className={`status-item ${isSpacePressed ? 'active' : ''}`}>
          Space: {isSpacePressed ? 'Pressed' : 'Not Pressed'}
        </div>
        <div className={`status-item ${isArrowPressed ? 'active' : ''}`}>
          Arrow Keys: {isArrowPressed ? 'Pressed' : 'Not Pressed'}
        </div>
        <div className={`status-item ${isModifierPressed ? 'active' : ''}`}>
          Modifier Keys: {isModifierPressed ? 'Pressed' : 'Not Pressed'}
        </div>
      </div>
      <div className="instructions">
        <p>Try pressing:</p>
        <ul>
          <li>Space key</li>
          <li>Arrow keys (↑, ↓, ←, →)</li>
          <li>Modifier keys (Ctrl, Alt, Command)</li>
        </ul>
      </div>
      <style>
        {`
          .key-press-demo {
            padding: 20px;
            max-width: 400px;
            margin: 0 auto;
          }
          .key-status {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
          }
          .status-item {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: all 0.3s ease;
          }
          .status-item.active {
            background-color: #4caf50;
            color: white;
            border-color: #4caf50;
          }
          .instructions {
            margin-top: 20px;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          .instructions ul {
            margin: 10px 0;
            padding-left: 20px;
          }
        `}
      </style>
    </div>
  );
} 