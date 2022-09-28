import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useAddNewPersonMutation } from "../redux/scrollApi";
import { faker } from '@faker-js/faker';

export const Header = () => {

  // useForm hook
  const {
    register,
    handleSubmit, 
    reset,
    formState: { errors }
  } = useForm()

  // rtk query hook for adding data to json-server
  const [
    addNewPerson
   ] = useAddNewPersonMutation()

  // submit handler method for form
  const onSubmit = async (data) => { 
    try {
      await addNewPerson({ 
        firstName: data.Name,
        company: data.Company,
        city: data.City,
        email: data.Email,
        vehicle: data.Car,
        image: faker.image.avatar() 
      }).unwrap()
    } catch (err) {
      console.error('Failed to add person ', err)
    }
    reset()
  }

  return (
    <div>
      {/* Collapsing form */}
      <form 
        className="row g-2 needs-validation p-4 mx-auto container-fluid collapse" 
        id="navbarToggleExternalContent"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            {...register('Name', {
              required: {
                value: true,
                message: 'Enter name'
              },
              validate: {
                letters: (v) => !/\d/.test(v) || 'Letters only'
              },
            })}
            type="text" 
            className="form-control" 
            id="name" 
          />

          <ErrorMessage
            errors={errors}
            name="Name"
            render={
              ({ message }) => 
              <div className="invalid-feedback">
                {message}
              </div>
            }
          />
      
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">City</label>
          <input
            {...register('City', {
              required: {
                value: true,
                message: 'Enter city name' 
              },
              validate: {
                letters: (v) => !/\d/.test(v) || 'Letters only'
              },
            })} 
            type="text" 
            className="form-control" 
            id="city" 
          />

          <ErrorMessage
            errors={errors}
            name="City"
            render={
              ({ message }) => 
              <div className="invalid-feedback">
                {message}
              </div>
            }
          />
          
        </div>
        <div className="col-md-6">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input
            {...register('Company', {
              required: {
                value: true,
                message: 'Enter company name' 
              },
              validate: {
                letters: (v) => !/\d/.test(v) || 'Letters only'
              },
            })}
            type="text" 
            className="form-control" 
            id="company" 
          />
          <ErrorMessage
            errors={errors}
            name="Company"
            render={
              ({ message }) => 
              <div className="invalid-feedback">
                {message}
              </div>
            }
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            {...register('Email', {
              required: {
                value: true,
                message: 'Enter email' 
              },
              validate: {
                email: (v) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v) || 'Please provide a valid email address'
              },
            })} 
            type="text" 
            className="form-control" 
            id="email" 
          />
          <ErrorMessage
            errors={errors}
            name="Email"
            render={
              ({ message }) => 
              <div className="invalid-feedback">
                {message}
              </div>
            }
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="car" className="form-label">Car</label>
          <input 
            {...register('Car', {
              required: {
                value: true,
                message: 'Enter car model' 
              },
              validate: {
                letters: (v) => !/\d/.test(v) || 'Letters only'
              },
            })}
            type="text" 
            className="form-control" 
            id="car" 
          />
          <ErrorMessage
            errors={errors}
            name="Car"
            render={
              ({ message }) => 
              <div className="invalid-feedback">
                {message}
              </div>
            }
          />
        </div>
        <div className="col-12 py-3">
          <input className="btn btn-dark" type="submit" value='Submit Form' />
        </div>
      </form>
      {/* collapser navigation */}
      <nav className="navbar navbar-dark bg-dark p-4">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}