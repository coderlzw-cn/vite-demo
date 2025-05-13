// import { useAnimation } from '../hooks/useAnimation';

// interface AnimatedBoxProps {
//   width?: number;
//   height?: number;
//   color?: string;
// }

// export function AnimatedBox({ width = 100, height = 100, color = '#4caf50' }: AnimatedBoxProps) {
//   const [startAnimation, state] = useAnimation(0, {
//     duration: 1000,
//     easing: (t) => t * (2 - t), // ease-out
//     onComplete: () => console.log('Animation completed')
//   });

//   const handleClick = () => {
//     startAnimation(state.value === 0 ? 1 : 0);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: `${width}px`,
//         height: `${height}px`,
//         backgroundColor: color,
//         transform: `scale(${1 + state.value * 0.5})`,
//         transition: 'transform 0.1s linear',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         fontWeight: 'bold',
//         userSelect: 'none'
//       }}
//     >
//       {state.isAnimating ? 'Animating...' : 'Click me!'}
//     </div>
//   );
// } 