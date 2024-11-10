import { Link, Outlet, createRootRoute,  } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import useSound from 'use-sound';
import select from '../assets/launch_select2.wav';
import hover from '../assets/launch_deny2.wav';
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const click = useSound(select);
  const mouse = useSound(hover);
  return (
    <>
      <div>
        <Link
          to="/"
          onMouseEnter={() => mouse[0]()} onClick={() => click[0]()}
        >
          Home
        </Link>
        <Link
          to="/about"
          onMouseEnter={() => mouse[0]()} onClick={() => click[0]()}
        >
          About
        </Link>
        <Link
          to="/gradient-art"
          onMouseEnter={() => mouse[0]()} onClick={() => click[0]()}
        >
          Gradient Art
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
