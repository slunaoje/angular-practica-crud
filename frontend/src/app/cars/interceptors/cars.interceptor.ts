import { HttpHandlerFn, HttpRequest } from '@angular/common/http'
import { environment } from '../../../environments/environment'

export function carsInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) {
    // Inject the current `AuthService` and use it to get an authentication token:
    const token = environment.token
    // Clone the request to add the authentication header.
    const newReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`),
    })
    return next(newReq)
}
