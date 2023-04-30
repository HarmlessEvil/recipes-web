type ErrorResponse = {
  message: string
}

export const fetchAndThrowIfNotSuccess = async (input: RequestInfo | URL, init?: RequestInit) => {
  const initWithAuth = {
    ...init,
    headers: {
      "Authorization": `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Iklrd21rbzhMS05jYkFZZ2RCMko1QyJ9.eyJpc3MiOiJodHRwczovL2Rldi1qNG51eGUxYjRxZndpbWpiLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJWN1dYNU9vQktmdWxURWwxYnlRWGRXQ1FqVHoyc09IOEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkucmVjaXBlcy5pbyIsImlhdCI6MTY4MjUyMjM0OSwiZXhwIjoxNjgyNjA4NzQ5LCJhenAiOiJWN1dYNU9vQktmdWxURWwxYnlRWGRXQ1FqVHoyc09IOCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.JV5Iw3jPDVXR-gsPZAQunNUDCnyfnn_NkIfh2xfsqG_KpiHYuwb8JOJsEcIAfSC_TH9M7gkSHHrcxyvNAX79FJF50ra98z1rXhZ0Vq0fTNXlKoOHCOp8dkiY7r4IEyFK-qz9Z2_A0hCh9gCsvSLsMXq0akGbdwROPDzgtW49_72RyAAvICWrSGCMG0zPXToLcZZYg3UZAhMK0yR7sGqShUdeO6LGjKrQEAU0eYwtt4ldcadJr2WpiFZLACUFIomT_fy_IQ8HlqkHCk9jKE0EyJFVCLrgwAtOiVC1TDZLd08ysRJ6LhxwU3jXZUoKnURDCc0DznDVyWSn1V5bFbiUCA`
    }
  }

  const r = await fetch(input, initWithAuth)
  if (r.ok) {
    return r.json()
  }

  const errorResponse: ErrorResponse = await r.json();
  throw new Error(errorResponse.message)
}
