import {Link} from 'react-router-dom'

const Course = props => {
  const {details} = props
  const {name, logoUrl, id} = details
  return (
    <Link to={`/courses/${id}`}>
      <li>
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default Course
