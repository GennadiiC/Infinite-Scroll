import { Item } from "./Item"
import { useGetPeopleByPageQuery } from '../redux/scrollApi'
import { useSelector } from "react-redux"

export const Table = () => {

  const { limit } = useSelector(state => state.scroll)

  // rtk query hook for fetching part of 'people' array to use in infinite scroll
  const {
    data: people,
    isSuccess: peopleSuccess,
  } = useGetPeopleByPageQuery(limit)

  return (
    <table className="table"> 
      <thead className="table-dark sticky-top">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Car</th>
        </tr>
      </thead>
      <tbody>
        {
          peopleSuccess ?
          people.map(item => 
            <Item 
              key={item.id}
              id={item.id + 1}
              name={item.firstName}
              avatar={item.image}
              city={item.city}
              company={item.company}
              car={item.vehicle}
              email={item.email}
            />
          ) :
          null
        }
      </tbody>
    </table>
  )
}