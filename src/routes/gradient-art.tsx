
import { createFileRoute } from '@tanstack/react-router'
import "../gradientart.css"
export const Route = createFileRoute('/gradient-art')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div id="wrapper">
      <div id="grad2"></div>

      <div id="grad1"></div>
    </div>
  )
}
