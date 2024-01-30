import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debug.component.html',
  styles: ``
})
export class DebugComponent implements OnInit {

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
