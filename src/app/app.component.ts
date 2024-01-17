import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public queryParamList: Array<{ key: string, value: string }> = [];
  public codeQuery!: {key: string, value: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam => {
      console.log(queryParam);
      Object.keys(queryParam).forEach(key => {
        const value = queryParam[key];
        if (key === 'code') {
          this.codeQuery = {key: key, value: value};
          this.queryParamList.push({key: key, value: value});
        } else {
          this.queryParamList.push({key: key, value: value});
        }
      });
    })
  }
}
