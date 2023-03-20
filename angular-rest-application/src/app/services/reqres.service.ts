import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) { }
}
