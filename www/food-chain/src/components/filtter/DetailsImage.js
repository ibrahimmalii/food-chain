
export default function DetailsImage(props) {
  return (
    <div>
    <img
    src={'http://localhost:8000' + props.photos}
    alt="fruit"
    width='100px'
    height='100px'
  />
    </div>
  )
}
