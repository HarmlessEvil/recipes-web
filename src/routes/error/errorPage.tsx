import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : ''

  return (
    <div className="row flex-fill align-items-center">
      <div className="col text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred</p>
        <p><em>{message}</em></p>
      </div>
    </div>
  )
}
