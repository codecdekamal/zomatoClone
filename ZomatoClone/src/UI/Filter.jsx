import { useState } from "react"
import { Link } from "react-router-dom"

const Filter = (props) => {
  return (
    <>
    <Link className="col border-2 ">
    <div className="icon-link icon-link-hover text-decoration-none col justify-start" style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }} href="#">
            {props.svg} {props.name}
</div>
    </Link>
    </>
  )
}

export default Filter
