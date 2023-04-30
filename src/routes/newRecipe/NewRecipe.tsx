import {Form, useNavigate} from "react-router-dom";

export const NewRecipe = () => {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Create new recipe</h1>
      </div>
      <div className="row">
        <Form method="POST">
          <div className="mb-3">
            <label className="form-label"> Name
              <input type="text" name="name" className="form-control"/>
            </label>
          </div>
          <button type="submit" className="btn btn-primary me-3">Submit</button>
          <button type="button" className="btn me-3" onClick={handleCancel}>Cancel</button>
        </Form>
      </div>
    </div>
  )
}
