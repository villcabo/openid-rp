import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './debug.component.html',
  styles: ``
})
export class DebugComponent implements OnInit {

  public queryParamList: Array<{ key: string, value: string }> = [];
  public codeQuery!: { key: string, value: string };

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam => {
      console.log(queryParam);
      Object.keys(queryParam).forEach(key => {
        const value = queryParam[key];
        if (key === 'code') {
          this.codeQuery = { key: key, value: value };
          this.queryParamList.push({ key: key, value: value });
        } else {
          this.queryParamList.push({ key: key, value: value });
        }
      });
    })
  }

  onLogout() {
    this.http.get('/jans-auth/restv1/end_session', { observe: 'response', responseType: 'text' })
      .subscribe({
        next: (val => {
          console.info('End session success');
          this.router.navigate([''])
            .then(value => console.info('Navigated success: ' + value));
        }),
        error: (err => {
          console.error('Failed to end session: ', err);
        }),
      });
  }
}
