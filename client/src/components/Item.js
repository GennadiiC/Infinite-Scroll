import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export const Item = ({
  id,
  avatar,
  city,
  name,
  company,
  car,
  email
}) => {

  // bootstrap components for avatar popovers
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{name}</Popover.Header>
      <Popover.Body>
        <Image 
          fluid
          src={avatar}
        />
      </Popover.Body>
    </Popover>
  );

  const Avatar = () => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" overlay={popover}>
      <p className='width'>
        <em>Hover</em>
      </p>
    </OverlayTrigger>
  );

  
  return (
    <>
      <tr className='my-auto'>
        <th>{id}</th>
        <td><Avatar /></td>
        <td>{name}</td>
        <td>{city}</td>
        <td>{company}</td>
        <td>{email}</td>
        <td>{car}</td>
      </tr>
    </>
  )
}